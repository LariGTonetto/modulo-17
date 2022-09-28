pipeline {
    agent any

    stages {
        stage('Clonar o repositório') {
            steps {
               git branch: 'main', url: 'https://github.com/LariTonetto/testes-mobile-android-2.git'
            }
        }
        stage('Instalar as dependências') {
            steps {
               powershell 'npm install'
            }
        }
        stage('Executar Testes') {
            steps {
              powershell 'npm test' 
            }
        }
    }
}