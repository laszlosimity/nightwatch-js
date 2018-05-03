var https = require('https');
var SauceLabs = require("saucelabs");

module.exports = {

    '@tags': ['NightwatchTests'],

    'NW Follow Link Test': function(client) {
        client
            .url('https://saucelabs-sample-test-frameworks.github.io/training-test-page')
            .waitForElementVisible('body', 10000)
            .click('#i_am_a_link')
            .assert.title('I am another page title - Sauce Labs');
    },


    afterEach: function(client, done) {
        client.customSauceEnd();

        setTimeout(function() {
            done();
        }, 1000);

    }

};
