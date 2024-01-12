## Primitive types

- A `primitive` data type is an immutable data that doesn't have either properties or methods.

  > There are 7 primitive types:

- undefined
- null
- string
- number
- boolean
- symbol
- bigint

### undefined

- It is a data type which represents a non-defined value. It means that you declare a variable but you don't set a value. The variable will contain an undefined value.

### Null

- It is a data type which represents the absence of value. It means that a variable contains nothing or you don't know its value yet.

### String

- It's a data type which represents text. It is used to store and manipulate text.You can define a string using single quotation marks, double quotation marks or backticks. With backticks, you can concatenate and interpolate variables inside the string.

### Number

- It's a data type which represents numbers with or without decimals. It is used to store and operat numbers.

### Safe Integers

- If you operate outside the limits, your operations won't have precision and some numbers might not be represented. For example:

```JavaScript
const maxSafe = Number.MAX_SAFE_INTEGER; //9007199254740991
const x = maxSafe + 1;  //9007199254740992
const y = maxSafe + 2;  //9007199254740992
x === y // true
```

- ES11 specification added a new primitive data type to handle numbers larger than maxsafe. It is called `_BigInt_`

#### Javascript Error

- The NaN value is a number that represents invalid numbers. There is a method isNaN(value) that indicates if a value is a NaN.

```Javascript
const x = 0/0; // NaN
const y = 1 * undefined; // NaN
const z = Number('Sarasa'); // NaN
typeof(x); // 'number'
typeof(y); // 'number'
typeof(z); // 'number'
```
