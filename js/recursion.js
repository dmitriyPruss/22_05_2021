'use strict';

function f() {
  f();
};

// 1! = 1;
// 2! = 2 * 1 = 2 * 1!;
// 3! = 3 * 2 * 1 = 3 * 2!;

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

debugger;
const a = factorial(5);