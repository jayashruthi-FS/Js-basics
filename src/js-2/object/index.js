//Object

const person = {
  name: "Jai",
  lastname: "Shruthi",
};
typeof person; // 'object'

// Other Objects

const numbers = [1, 2, 3, 4];
const aSet = new Set();
const aDate = new Date();
const sayHello = function (name) {
  console.log(`Hello ${name}!`);
};
typeof numbers; // 'object'
typeof aSet; // 'object'
typeof aDate; // 'object'
typeof sayHello; // 'function'
