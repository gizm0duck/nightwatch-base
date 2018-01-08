// THIS FILE MUST BE IN SYNC WITH chat-api/integration_tests.rake

var user = {
  name: 'Bob Dobber',
  email: 'bob.dobber@example.com',
  password: 'Password123'
};

module.exports = {
  user,
  "waitForConditionTimeout": 10000
}
