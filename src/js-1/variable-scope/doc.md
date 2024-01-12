# Scopes in JavaScript with Variable Declarations

- `var`, the variable is function-scoped, and it is accessible throughout the entire function. Additionally, var is hoisted to the top of the function scope.

- `let` is block-scoped, meaning it is only accessible within the block where it is declared. Accessing it outside that block results in an error.

- `const` is block-scoped. Once a value is assigned to a const variable, it cannot be changed and attempting to access it outside its block scope results in an error.

## var

```javascript
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
```

# References

- dev community blog
- medium blog
- youtube videos
