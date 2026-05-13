pipeline {
    agent any

    environment {
        AWS_REGION = 'us-west-1'
        ACCOUNT_ID = '973294445568'
        ECR_REPO = 'myappreact'

        IMAGE_TAG = "latest"
        ECR_URI = "${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO}"

        ECS_CLUSTER = 'clustertask'
        ECS_SERVICE = 'connect1-service-af85vv5l'
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t $ECR_REPO:$IMAGE_TAG .
                '''
            }
        }

        stage('Login to AWS ECR') {
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: '97329444556'
                ]]) {
                    sh '''
                    aws ecr get-login-password --region $AWS_REGION | \
                    docker login --username AWS --password-stdin \
                    $ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com
                    '''
                }
            }
        }

        stage('Tag Docker Image') {
            steps {
                sh '''
                docker tag $ECR_REPO:$IMAGE_TAG $ECR_URI:$IMAGE_TAG
                '''
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: '97329444556'
                ]]) {
                    sh '''
                    docker push $ECR_URI:$IMAGE_TAG
                    '''
                }
            }
        }

        stage('Deploy to ECS') {
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: '97329444556'
                ]]) {
                    sh '''
                    aws ecs update-service \
                      --cluster $ECS_CLUSTER \
                      --service $ECS_SERVICE \
                      --force-new-deployment \
                      --region $AWS_REGION
                    '''
                }
            }
        }
    }
}