// scope with VAR

function exampleScopeVar() {
  if (true) {
    var a = 10;
  }
  console.log(a); // Outputs 10, var is function-scoped
}

exampleScopeVar();

console.log(b); // Outputs undefined, var is hoisted
var b = 20;
console.log(b); // Outputs 20

// scope with LET

function exampleScopeLet() {
  if (true) {
    let c = 30;
    console.log(c); // Outputs 30, let is block-scoped
  }
  // console.log(c); // Error, c is not defined in this scope
}

exampleScopeLet();

// console.log(d); // Error, d is not defined before initialization
let d = 40;
console.log(d); // Outputs 40

// scope with CONST

function exampleScopeConst() {
  const e = 50;
  if (true) {
    console.log(e); // Outputs 50, const is block-scoped
  }
  // console.log(e); // Error, e is not defined in this scope
}

exampleScopeConst();

// console.log(f); // Error, f is not defined before initialization
const f = 60;
console.log(f); // Outputs 60
