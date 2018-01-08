module.exports = {

  'Test Login with valid account' : function (browser) {
    const loginPage = browser.page.loginPage();
    // const profilePage = browser.page.profile();

    loginPage.navigate()
      .assert.title('Login Page')
      .login(browser.globals.email, browser.globals.password)
      // .assert.urlContains(profilePage.url());
    browser.end();
  }
};
