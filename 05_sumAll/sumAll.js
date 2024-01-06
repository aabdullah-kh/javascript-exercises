const sumAll = function(val1, val2) {

    if ((typeof val1 != "number") || (typeof val2 != "number") || (val1 < 0 || val2 < 0)) {
        return 'ERROR'
    } else {
        max = Math.max(val1, val2)
        min = Math.min(val1, val2)
        curr = 0

        for (i = min; i < max + 1; i++) {
            curr += min
            min += 1
        } 
        
        return curr

    }

};

// Do not edit below this line
module.exports = sumAll;
