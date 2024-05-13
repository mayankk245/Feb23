pipeline {
    agent any
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'npm run test'
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
