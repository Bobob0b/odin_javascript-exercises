const palindromes = function (str) {
    // sanitize string
    let isPalindrome = true;
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let arrStr = str.split("");
    let arrReverse = [...arrStr];
    arrReverse = arrReverse.reverse();
    for (x = 0; x < arrStr.length; x++) {
        if (arrStr[x] != arrReverse[x]) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
