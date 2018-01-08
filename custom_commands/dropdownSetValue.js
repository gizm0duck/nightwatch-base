exports.command = function uglySetValue(selector, value, pause = 1) {

  this
    .click(selector)
    .keys(value)
    .pause(pause)
    .useXpath()
    .waitForElementVisible("(//*[contains(@class, 'Select-option')])[1]")
    .click("(//*[contains(@class, 'Select-option')])[1]")
};
