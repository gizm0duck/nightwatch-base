var loginCommands = {
  login: function(email, password) {

    this.api.pause(1000);
    return this.setValue('@emailField', email)
    .setValue('@passwordField', password)
    .click('@submitButton')
    .waitForElementNotPresent('@submitButton');
  }
};

module.exports = {
  url: function () {
    return process.env.URL + '/login';
  },
  elements: {
    emailField: {
      selector: 'input[name="email"]'
    },
    passwordField: {
      selector: 'input[name="password"]'
    },
    submitButton: {
      selector: 'button[type=submit]'
    }
  },
  commands: [loginCommands]
};
