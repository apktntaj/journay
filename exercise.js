/*
Declare a function that takes three numbers as arguments and returns 
the sum of the squares of the two larger numbers.
*/

const sums = (...args) => {
  let res = 0;

  return args.map((num) => (res = res + num))[args.length - 1];
};

console.log(sums(10, 18, 19, 17, 22));
console.log(86 / 2);
