// ===

const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

// ==

let a = 10;
let b = 10;
let c = -10;

console.log(a == b);
//output: true

console.log(a == c);
//output: false

console.log(b != c);
//output: true

console.log(a != b);
//output: false

// If you wanna try this code comment the above code.

// let a = 10;
// let b = 10;
// let c = -10;

// console.log(a==b);
// //output: true

// console.log(a==c);
// //output: false

// console.log(b!=c);
// //output: true

// console.log(a!=b);
// //output: false

10 == "10"; //true
10 == "99"; //false
10 != "99"; //true
10 != "10"; //false

true == 1; //true
true == 0; //false
false != 1; //true
false != 0; //false

null === null; //true
undefined === undefined; //true
null === undefined; //false

let car1 = {
  name: "Maruti",
};

let car2 = {
  name: "Maruti",
};

console.log(car1 == car1);
//output: true

console.log(car1 == car2);
//output: false

console.log(car1 != car1);
//output: false

console.log(car1 != car2);
//output: true
