function outerFunction() {
  const message = "Hello from Closure!";
  function innerFunction() {
    console.log(message);
  }
  return innerFunction;
}

const storedFunction = outerFunction();
storedFunction();
