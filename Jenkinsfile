pipeline {
    agent any

    environment {
        AWS_REGION = 'us-west-1'
        ACCOUNT_ID = '973294445568'
        ECR_REPO = 'myappreact'

        IMAGE_TAG = "${973294445568.dkr.ecr.us-west-1.amazonaws.com/myappreact:latest}"

        ECS_CLUSTER = 'clustertask'
        ECS_SERVICE = 'connect1-service-af85vv5l'
    }

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/preksha1224/myappreact.git'
            }
        }

        stage('Build Docker') {
            steps {
                sh '''
                docker build -t $ECR_REPO:$IMAGE_TAG .
                '''
            }
        }

        stage('Login ECR') {
            steps {
                sh '''
                aws ecr get-login-password --region $AWS_REGION | \
                docker login --username AWS --password-stdin \
                $ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com
                '''
            }
        }

        stage('Tag Docker Image') {
            steps {
                sh '''
                docker tag $ECR_REPO:$IMAGE_TAG \
                $ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO:$IMAGE_TAG
                '''
            }
        }

        stage('Push Docker Image') {
            steps {
                sh '''
                docker push \
                $ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO:$IMAGE_TAG
                '''
            }
        }

        stage('Deploy ECS') {
            steps {
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