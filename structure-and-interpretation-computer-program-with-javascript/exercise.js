/*
Ben Bitdiddle has invented a test to determine whether the interpreter he is faced with is using applicative-order evaluation or normal-order evaluation. He declares the following two functions:
*/
// Define the p function
function p() {
  return p();
}

// Define the test function
function test(x, y) {
  if (x === 0) {
    return 0;
  } else {
    return y;
  }
}

test(0, p());

// What behavior will Ben observe with an interpreter that uses applicative-order evaluation? What behavior will he observe with an interpreter that uses normal-order evaluation? Explain your answer. (Assume that the evaluation rule for the special form if is the same whether the interpreter is using normal or applicative order: The predicate expression is evaluated first, and the result determines whether to evaluate the consequent or the alternative expression.)

// Applicative-order evaluation
