pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/mkuerst/ci_cd_demo'
            }
        }

        
        stage('Build and Start Containers') {
            steps {
                sh 'docker-compose down --remove-orphans || true'
                sh 'docker rm -f app-mongodb gio_apim_elasticsearch gio_apim_mongodb gio_apim_gateway app-backend app-frontend gio_apim_management_api gio_apim_portal_ui gio_apim_management_ui || true'
                sh 'docker-compose build'
                sh 'docker-compose up -d'
            }
        }

        stage('Health Check or Tests') {
            steps {
                sh 'curl -f http://host.docker.internal:3000 || exit 1'
                // sh 'curl -f http://localhost:3000 || exit 1' // check frontend
                // sh 'curl -f http://localhost:4000/api/health || exit 1' // check backend
            }
        }

    }
}
