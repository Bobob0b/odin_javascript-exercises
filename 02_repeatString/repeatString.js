const repeatString = function(string, num) {

    let returnstring = "";

    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            returnstring = returnstring + string;
        }
    } else {
        returnstring = "ERROR";
    }

    return returnstring;

};

// Do not edit below this line
module.exports = repeatString;
