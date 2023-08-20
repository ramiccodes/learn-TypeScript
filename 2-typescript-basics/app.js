console.log("Hello TypeScript! Hehe");
console.log("New York New York");
// Working with Types
// Core Syntax & Features
// Core Types
//  - number - there is only one number type (no integer, no floats, all numbers no differentation)
//  - string - 'Hi', "Hi", `Hi` - All text values
//  - boolean - true, false - Just these two, no "truthy" or "falsy" values
// Let's do something that will "break" the output of this vanilla JavaScript
function add(n1, n2) {
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
// We're getting this output because '5' is a string and it concatenates it to number2 as a string converts the output to a string
// Converted to TypeScript
function addType(n1, n2) {
    return n1 + n2;
}
var result2 = addType(number1, number2);
console.log(result);
// We get an error with number1 because it is a string because we asserted n1 should be of the number type
// To fix this, we must convert '5' to an integer of 5
// TypeScript Types vs JavaScript Types
// JS Types
console.log(typeof number1);
// You can use an if statement to check if input is a number using typeof
// if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//  throw new Error('Incorrect input!')
// }
// This is the way of checking inputs only using Vanilla JavaScript
// This approach has downsides though, we're checking something can avoid during development using TypeScript
// We could've prevented this error from happening in the first place by using TypeScript in development
// JS is dynamically typed (ever-changing variable - resolved at runtime), while TS is statically typed (we define the type of the variables and parameters - set during development)
// Using JS typeof means that we can only fail at runtime instead of during development which is a better place for developers to fix bugs earlier
// JS only knows a limited amount of types, compared to TS
// TS types are in all lowercase like string or number (not String or Number)
// Working with Numbers, Strings & Booleans
function addBoolean(n1, n2, showResult) {
    if (showResult) {
        console.log(n1 + n2);
    }
    console.log("nope");
}
addBoolean(9, 10, false);
