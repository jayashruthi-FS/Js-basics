// Hoisting with var

function exampleHoistingVar() {
  console.log(a); // Outputs undefined, variable is hoisted but not initialized
  var a = 10;
  console.log(a); // Outputs 10
}

exampleHoistingVar();

// Hoisting with let

function exampleHoistingLet() {
  // console.log(b); // Error, variable is not initialized (not hoisted to the top)
  let b = 20;
  console.log(b); // Outputs 20
}

exampleHoistingLet();

// Hoisting with const

function exampleHoistingConst() {
  // console.log(c); // Error, variable is not initialized (not hoisted to the top)
  const c = 30;
  console.log(c); // Outputs 30
}

exampleHoistingConst();
