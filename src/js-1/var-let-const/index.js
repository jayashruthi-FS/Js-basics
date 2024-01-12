// VAR Examples

function exampleVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Outputs 10, var is function-scoped
}

exampleVar();

console.log(y); // Outputs undefined, var is hoisted
var y = 20;
console.log(y); // Outputs 20

// LET Examples

function exampleLet() {
  let a = 30;
  if (true) {
    let a = 40; // Different variable, block-scoped
    console.log(a); // Outputs 40
  }
  console.log(a); // Outputs 30
}

exampleLet();

function exampleLet() {
  let a = 30;
  if (true) {
    let a = 40; // Different variable, block-scoped
    console.log(a); // Outputs 40
  }
  console.log(a); // Outputs 30
}

exampleLet();

let b = 50; // let b = 60; // Error, cannot redeclare in the same block

b = 70; // No error, can be reassigned

console.log(b); // Outputs 70

// CONST examples

function exampleConst() {
  const pi = 3.14;
  pi = 3.1415; // Error, cannot reassign const variable
  console.log(pi); // Outputs 3.14
}

exampleConst();

const gravity = 9.8;
//    const gravity = 10; =>  // Error, cannot redeclare const variable
gravity = 9; // Error, cannot reassign const variable
