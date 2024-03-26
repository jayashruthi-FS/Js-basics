## Type Coercion

- Type coercion occurs automatically in JavaScript, allowing values of different data types to be used together in operations or comparisons.

- Similarly, Implicit type conversion happens when the compiler or runtime automatically converts data types.

```Javascript
var num = 42;
var str = "The answer is " + num; // Coercion: number to string
console.log(str); // Output: "The answer is 42"
```

- When a numeric value is concatenated with a string using the + operator, JavaScript coerces the number to a string.
- When a string value is involved in an arithmetic operation, JavaScript attempts to convert it to a numeric value.
- When comparing values using the == (loose equality) or != (loose inequality) operators, JavaScript performs type coercion to make the values comparable.
- JavaScript has a concept of truthy and falsy values, where certain values are coerced to true or false in a boolean context.
- Falsy values include false, 0, “” (empty string), null, undefined, and NaN. All other values are considered truthy when coerced to a boolean.
