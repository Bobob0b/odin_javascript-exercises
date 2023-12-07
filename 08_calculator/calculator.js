const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2
};

const sum = function (array) {
  return array.reduce((sum, item) => {
    return sum + item;
  }, 0);
};

const multiply = function (array) {
  return array.reduce((sum, item) => {
    return sum * item;
  });
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (number) {
  let sum = 1;
  let i = 1;
  while (i <= number) {
    sum = sum * i;
    i++;
  };
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
