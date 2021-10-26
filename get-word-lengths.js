const getWordLengths = function(someWords) {
    let wordLengths = someWords.map(word => word.length)
    return wordLengths
};

module.exports = getWordLengths;