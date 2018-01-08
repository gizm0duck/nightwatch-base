exports.command = function uglySetValue(selector, value) {

  return this
    .click(selector)
    .keys(value)
    .keys(this.Keys.ENTER)
};
