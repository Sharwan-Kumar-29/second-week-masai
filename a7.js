function multiply(x, y) {
  return x * y;
}

const result = multiply.apply(null, [4, 5]);
console.log(result);

