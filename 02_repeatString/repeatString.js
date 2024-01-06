const repeatString = function(str, num) {
    repeat = "";
    if (num < 0) {
        return 'ERROR'
    }
    for (i = 0; i < num; i++) {
        repeat += str;
    }

    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
