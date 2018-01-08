const leftPad = (value, length = 1, subStr = ' ') => {
  if (!value) {
    return subStr.repeat(length/subStr.length)
  }
  const strValue = value.toString()
  if (strValue.length >= length) {
    return strValue
  }
  const lengthDiff = length - strValue.length
  let padString = subStr
  if (lengthDiff > padString.length) {
    padString += padString.repeat(lengthDiff/padString.length)
  }
  return padString.slice(0, lengthDiff) + strValue
}

module.exports = {
  leftPad
}
