var https = require('https');
var SauceLabs = require("saucelabs");

module.exports = {

    '@tags': ['NightwatchTests'],

    'NW Text Input Test': function(client) {
        client
            .url('https://saucelabs-sample-test-frameworks.github.io/training-test-page')
            .waitForElementVisible('body', 10000)
            .setValue('#comments', 'nightwatch')
            .click('#submit')
            .waitForElementVisible('#i_am_an_id',10000)
            .assert.containsText('#your_comments', 'nightwatch');
    },

    afterEach: function(client, done) {
        client.customSauceEnd();

        setTimeout(function() {
            done();
        }, 1000);

    }

};
