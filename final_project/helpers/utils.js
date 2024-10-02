function getRandomKeyFromDictionary(dictionary) {
  const keysArray = Object.keys(dictionary);
  return keysArray[Math.floor(Math.random() * keysArray.length)];
}

function convertStringToFloat(element) {
  return parseFloat(element.replace(/[^\d.]/g, ''));
}
function getRandomInt(count) {
  return Math.floor(Math.random() * count);
}

module.exports = { getRandomKeyFromDictionary, convertStringToFloat, getRandomInt};