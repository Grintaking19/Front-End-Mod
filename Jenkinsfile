pipeline {
    agent any

    environment {
        IMAGE_NAME = "front:${BUILD_NUMBER}"
        CONTAINER_NAME = "front"
    }

    stages {
        stage('Build') {
            steps {
                sh "docker system prune -af"
                sh "docker build -t ${IMAGE_NAME} "
            }
        }

        stage('Deploy') {
            steps {
                sh "docker stop ${CONTAINER_NAME} || true"
                sh "docker rm -f ${CONTAINER_NAME} || true"
                sh "rm -rf /var/www/hebtus.com/html/*"
                sh "docker run -d --name ${CONTAINER_NAME} -v /var/www/hebtus.com/html:/app/build ${IMAGE_NAME}"
            }
        }
    }
}
