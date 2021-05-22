'use strict';

function sum(a, b) {
  return a + b;
};

const sum2 = (a, b) => {
  return a + b;
};

// const factorial = n => {
//   if (n === 1) {
//     return 1;
//   };
//   return n * factorial(n - 1);
// };
const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));
console.log('factorial(5) :>> ', factorial(5));

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(item => item % 2 === 0);

const getSquare = n => (n ** 2);
console.log('getSquare(3) :>> ', getSquare(3));

