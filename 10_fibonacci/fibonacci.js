const fibonacci = function (member) {
    let n1 = 1; // read: n-1
    let n2 = 1; // read: n-2
    let sum = 0;

    if (member < 0) return "OOPS";
    if (member == 0) return 0;
    if (member == 1 || member == 2) return n1;
    if (member >= 3) {
        for (let i = 3; i <= member; i++) {
            sum = n1 + n2; // current value is the sum of the two previous values
            // after building the sum every variable gets the value of the next one, beginning with the last.
            n2 = n1;
            n1 = sum;
        };
        return sum;
    };

};

// Do not edit below this line
module.exports = fibonacci;
