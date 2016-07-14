module.exports = function average(...args) {
    var sum = 0;
    args.forEach((br, index) => sum += br)
    return sum / args.length;
};
