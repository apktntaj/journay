// A sym B = what in A not in B
function symDiff(arr1, arr2) {
  return arr1
    .filter((el) => arr2.indexOf(el) === -1)
    .concat(arr2.filter((el) => arr1.indexOf(el) === -1));
}

function sym(...args) {
  if (args.length === 2) {
    return symDiff(args[0], args[1]);
  } else {
    return sym(symDiff(args[0], args[1]), ...args.splice(2));
  }
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
