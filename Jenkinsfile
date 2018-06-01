node {
  stage 'Build'
    checkout scm
    nodejs ('latest') {
       sh 'npm install'
    }

  stage 'Test'
      sauce('7cd7c160-4142-4d0d-8404-c3dd913d5f44') {
    	nodejs ('latest') {
          sh './node_modules/.bin/nightwatch -e chrome tests || true'
	}
        saucePublisher()
       }
}
