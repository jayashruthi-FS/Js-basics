// typeof operator used to identify data type

typeof "Jai"; // string
typeof 12; // integer
typeof true; // boolean
typeof undefined; // undefined
typeof null; // object
typeof {}; // object
typeof Symbol(); // symbol
typeof 1n; // bigint
typeof function () {}; // function

// undefined

var a;
console.log(a); // undefined
console.log(typeof a); // 'undefined'
console.log(typeof b); // 'undefined'
console.log(b); // Uncaught ReferenceError: b is not defined

// Null

const a = null;
console.log(a); // null
console.log(typeof a); // 'object'

// String

const name = "Shruthi"; // Single quotation marks
const lastname = "Gurumoorthy"; // Double quotation marks
const hello = `Hello ${name} ${lastname}`; // Backsticks -> Hello Shruthi Gurumoorthy
console.log(typeof hello); // 'string'

// To create wrapper objects to cast values

const numberStr = String(123);
const boolStr = String(true);
console.log(numberStr); // '123'
console.log(boolStr); // 'true'

// type coercion

const age = 29;
const ageFromWrapperInteger = age.toString(); // '29'
const ageCoercionStr = 29 + ""; // '29'
const isMaleCoercionStr = true + ""; // 'true'
console.log(typeof ageFromWrapperInteger); // 'string'
console.log(typeof ageCoercionStr); // 'string'
console.log(typeof isMaleCoercionStr); // 'string'

// Number

const number = 29;
const numberWithDecimals = 3.14;
const numberObjectWrapper = Number("2"); // 2
typeof number; // 'number'
typeof numberWithDecimals; // number
typeof numberObjectWrapper; // number
//round numbers
const numberWithoutFixed = 0.1 + 0.2; //// 0.30000000000000004
const numberFixedStr = number.toFixed(2); // '0.30'
const numberFixed = +number.toFixed(2); // 0.3

//Boolean

const isValid = true;
const isFetching = false;
const isLoading = Boolean(true);
typeof isValid; // 'boolean'
typeof isFetching; // 'boolean'
typeof isLoading; // 'boolean'
