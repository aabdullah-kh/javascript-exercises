const findTheOldest = function(arr) {

    age = 0
    oldest = {}

    for (i = 0; i < arr.length; i++) {
        death = arr[i].yearOfDeath
        birth = arr[i].yearOfBirth
        curr = 0

        if (death == undefined) {
            curr = 2024 - birth
        } else {
            curr = death - birth
        }

        if (curr > age) {
            age = curr
            oldest = arr[i]
        }

    }

    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
