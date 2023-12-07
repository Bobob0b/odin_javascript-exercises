const findTheOldest = function (array) {

    return array.sort((a, b) => {

        let thisYear = new Date().getFullYear();
        "yearOfDeath" in a ? a.currAge = a.yearOfDeath - a.yearOfBirth : a.currAge = thisYear - a.yearOfBirth;
        "yearOfDeath" in b ? b.currAge = b.yearOfDeath - b.yearOfBirth : b.currAge = thisYear - b.yearOfBirth;

        return (a.currAge > b.currAge) ? -1 : 1;


    })[0];


};

// Do not edit below this line
module.exports = findTheOldest;
