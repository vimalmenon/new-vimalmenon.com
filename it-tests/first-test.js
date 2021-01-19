module.exports = {
    'My first test case'(browser) {
        browser
            .url('https://vimalmenon.com/')
            .waitForElementVisible('.jss156')
            .assert.containsText('.jss156', 'About Me');
    }
};