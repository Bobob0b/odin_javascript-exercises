const removeFromArray = function(arr, ...args) {

    let retArr = [];

    for (const element of arr) {
        if (!args.includes(element)){
            retArr.push(element);
        }
    }
    return retArr
};

// Do not edit below this line
module.exports = removeFromArray;
