const removeFromArray = function(arr, ...args) {
    for (i = 0; i < args.length; i++) {
        item = args[i]
        for (j = 0; j < arr.length; j++) {
            if (arr[j] === item) {
                arr.splice(j, 1)
                break
            }
        }
    } return arr
};

// Do not edit below this line
module.exports = removeFromArray;
