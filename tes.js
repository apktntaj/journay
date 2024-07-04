function aPlusAbsB(a, b) {
  if (b > 0) {
    return a + b;
  } else {
    return a - b;
  }
}

console.log(aPlusAbsB(1, 2));
console.log(aPlusAbsB(1, -2));
