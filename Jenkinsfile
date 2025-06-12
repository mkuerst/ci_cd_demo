pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/mkuerst/api_gateway_demo'
            }
        }

        
        stage('Build and Start Containers') {
            steps {
                sh 'docker-compose build'
                sh 'docker-compose up -d'
            }
        }

        stage('Health Check or Tests') {
            steps {
                sh 'curl -f http://localhost:3000 || exit 1' // check frontend
                // sh 'curl -f http://localhost:4000/api/health || exit 1' // check backend
            }
        }

    }
}
