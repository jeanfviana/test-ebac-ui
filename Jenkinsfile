pipeline {
    agent any
    options {
        ansiColor('xterm')
    }

    stages {
        stage('Clone repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/jeanfviana/test-ebac-ui.git'
            }
        }
        stage('Instalando dependencias') {
            steps {
                bat 'npm install'
            }
        }
        stage('Realizar testes') {
            steps {
                bat 'npm run cy:run'
            }
        }
    }
}
