pipeline {
    agent any

    environment {
        SERVER_IP = "54.219.128.111"
        DEPLOY_DIR = "/var/www/html"
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/preksha1224/Global_Chemical_Minerals.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('Global-chemical-and-minerals') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Angular App') {
            steps {
                dir('Global-chemical-and-minerals') {
                    sh 'npx ng build --configuration=production'
                }
            }
        }

        stage('Deploy to Apache Server') {
            steps {
                sh '''
                ssh -o StrictHostKeyChecking=no ubuntu@$SERVER_IP "sudo rm -rf $DEPLOY_DIR/*"
                scp -o StrictHostKeyChecking=no -r Global-chemical-and-minerals/dist/* ubuntu@$SERVER_IP:$DEPLOY_DIR
                '''
            }
        }

    }
}