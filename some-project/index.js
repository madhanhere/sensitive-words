const {sensitiveWords} = require('sensitive-words');

const filteredSentence = sensitiveWords('The have five apples, you have two oranges', ['apples', 'oranges'])

console.log(filteredSentence);
