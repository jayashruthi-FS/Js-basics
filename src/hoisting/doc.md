# Hoisting in JavaScript

> `Hoisting` is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase.

- This can result in some unexpected behavior, especially when using different variable declarations.

## var

```javascript
function exampleHoistingVar() {
  console.log(a); // Outputs undefined, variable is hoisted but not initialized
  var a = 10;
  console.log(a); // Outputs 10
}

exampleHoistingVar();
```

# References

- dev community blog
- medium blog
- youtube videos
