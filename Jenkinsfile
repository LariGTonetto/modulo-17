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
         stage('Credenciais do browserstack') {
            steps {
               browserstack('5eae75cbc24acdd2090ee66036d65794b289204f') {
                 }
            }
        }
        stage('Executar Testes') {
            steps {
              powershell 'npm test' 
            }
        }
    }
}
