const reverseString = function(string) {

    let returnstring = "";

    for (let i = string.length; i >= 0; i--) {
        returnstring = returnstring + string.charAt(i);
    }

    return returnstring;


};

// Do not edit below this line
module.exports = reverseString;
