const findNeedle = function(words) {
    const indexNumber = words.findIndex(word => word === "needle")
    return indexNumber
};

module.exports = findNeedle;