console.log("Hello TypeScript! Hehe");
console.log("New York New York");

// Working with Types
// Core Syntax & Features

// Core Types
//  - number - there is only one number type (no integer, no floats, all numbers no differentation)
//  - string - 'Hi', "Hi", `Hi` - All text values
//  - boolean - true, false - Just these two, no "truthy" or "falsy" values

// Let's do something that will "break" the output of this vanilla JavaScript
function add(n1, n2){
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

// We're getting this output because '5' is a string and it concatenates it to number2 as a string converts the output to a string

// Converted to TypeScript
function addType(n1: number, n2: number){
  return n1 + n2;
}

const result2 = addType(number1, number2);
console.log(result);

// We get an error with number1 because it is a string because we asserted n1 should be of the number type
// To fix this, we must convert '5' to an integer of 5


// TypeScript Types vs JavaScript Types

// JS Types
console.log(typeof number1)
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
function addBoolean(n1: number, n2: number, showResult: boolean){
  if (showResult) {
    console.log(n1 + n2)
  }
  console.log("nope")
}

addBoolean(9, 10, false)

// The ": number, : boolean" in the above function is called a Type Assignment, where you assign a variable or parameter a type
// They're called Explicit Type Assignments, only understood by TS

// Type Inference:
// TS does its best to understand which type you have in a certain variable or constant
const number = 1;
// TS understands that the code above is of a number type, because you initialize it with a number
// Using the keyword const makes it so that TS asserts it a number type with a value of 5
// If a let keyword was used instead, it would only assert it to be a number type, since a variable declared with let can be mutated
// We don't have to do type assignments when declaring variables like you would an argument since it uses Type Inference

// The only scenario where it would be useful is declaring a variable but not initializing it with a value:
let unassignedVariable: string;
// By the time that you assign this variable a value, it then asserts what kind of value
unassignedVariable = 'hullo';
// The main job of TypeScript is to check types and yell at us if we're using them incorrectly
