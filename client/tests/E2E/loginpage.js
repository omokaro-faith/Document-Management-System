import config from './config';

export default {
  'Login a user': browser =>
    browser
      .url(config.url)
      .waitForElementVisible('body', 3000)
      .assert.containsText('#greetings',
      'Managing And Organizing Of Documents Just Got Better')
      .click('#login')
      .setValue('Input[name=identifier]', 'omokarofaith@gmail.com')
      .setValue('Input[name=password]', 'Ekhorowa')
      .click('button')
      .waitForElementVisible('a.view', 3000)
      .assert.containsText('a.view',
      'assignment')
      .end(),
  'Invalid login': (browser) => {
    browser
      .url(config.url)
      .waitForElementVisible('body', 3000)
      .click('#login')
      .setValue('Input[name=identifier]', 'pap@test')
      .setValue('Input[name=password]', 'qwerty')
      .click('button')
      .waitForElementVisible('body', 3000)
      .assert.urlContains('login')
      .end();
  },
};
