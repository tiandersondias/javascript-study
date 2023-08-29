# Java Script Introduction

Dynamic and Interpreted Programming Language

# addEventListener

A Pen was created on CodePen.io. Original URL: [https://codepen.io/tiandersondias/pen/NWeqOzg](https://codepen.io/tiandersondias/pen/NWeqOzg).

# JS Cheatsheet

You could either put your JavaScript inside a `<script>` tag in your HTML or create a new file that ends with `.js` and connect it to your HTML like this:

```html
<script src="script.js"></script>
```

The name of the file could be anything. Mine is `script.js`, as long as it ends with `.js`.

## Variables

Variables are pieces of data that can be passed around and manipulated.

Declare a variable (create)

```js
var name = "Anderson";
var age = 39;
```

Reassign the value of a variable

```js
var name = "Anderson";
name = "Marcos";
```

### Variable types

Number

```js
var age = 39;
```

String

```js
var name = "Anderson";
```

###### (Remember: string value must be in 'single' or "double" quotes)

Boolean

```js
var coder = true;
// could be true or false
```

Array

```js
var friends = ["Jessica", "Carolina", "Nalva"];
```

Object

```js
var person = {
  name: "Jessica",
  age: 31,
  coder: true,
  friends: ["Carolina", "Marcos"],
};
```

## Functions

Functions are pizza! 🍕 We use functions to isolate repetitive work so we can delegate the work to it later instead of repeating ourselves.

Declare a function (create)

```js
function myFunction() {
  // This is a function. All the logic will go here
}
```

A function that returns something

```js
function myFunction() {
  // This function returns a string with the value of 'apple'
  return "apple";
}
```

A function that accepts one parameter

```js
function myFunction(a) {
  // This function accepts one parameter called 'a' and logs it into the console
  console.log(a);
}
```

A function that accepts multiple parameters

```js
function myFunction(num1, num2) {
  // This function accepts two parameters, num1 and num2, adds them together and returns the total value
  return num1 + num2;
}
```

## Conditionals (if statement)

Conditionals allow us to compare two pieces of data, including variables.

```js
var element = document.getElementById("my-element");
element.style.backgroundColor = "red";
```
