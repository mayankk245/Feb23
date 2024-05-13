pipeline {
    agent any

     environment {
        // Define the Node.js installation tool
        NODEJS_HOME = tool 'node16'
        PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Copy main.js to Local Path') {
            steps {
                sh 'cd ./dist/Feb23'
                sh 'cp main.js /Users/mayankkulkarni/build'
            }
        }
    }
}
