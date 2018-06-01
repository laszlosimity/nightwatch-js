node {
  stage 'Build'
    checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '31e54e4d-4fd4-48dc-b6ba-108677c781a8', url: 'https://github.com/saucelabs-sample-test-frameworks/JS-Nightwatch.js']]])    
    nodejs {
       sh 'npm install'
    }

  stage 'Test'
      sauce('7cd7c160-4142-4d0d-8404-c3dd913d5f44') {
    	nodejs {
          sh './node_modules/.bin/nightwatch -e chrome tests || true'
	}
        saucePublisher()
       }
}
