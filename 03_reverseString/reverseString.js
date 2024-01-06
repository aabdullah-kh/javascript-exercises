const reverseString = function(str) {
    reverse = "";

    for (i = 0; i < str.length; i++) {
        reverse += str[str.length - (i + 1)]
    }
    return reverse;
};  

// Do not edit below this line
module.exports = reverseString;
