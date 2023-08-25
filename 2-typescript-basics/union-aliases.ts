// Union Type

// The combine function should work with both number and strings
function combine(input1: number, input2: number){
  const result = input1 + input2;
  return result;
}

const combinedAges = combine(30,26)
console.log(combinedAges);

const combinedNames = combineUnion('Max', 'Anna') // This would error out given that you're combining strings

// A union type can help us by letting us tell TS that we are fine with either number or string
// We can do this by using a "|" symbol, letting us put as many types as we need 

function combineUnion(input1: number | string, input2: number | string){
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(combinedNames);


// Literal Types
function combineLiteral(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-string' // Union Type combined with Literal Type
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(combinedNames);

console.log(combineLiteral('5','5', 'as-number'))

// We want a string for result conversion, but it has to be one of these two values 'as-number', 'as-string', other strings are not allowed
// This is the idea of the Literal Type


// Type Aliases / Custom Types
// To create an alias, use the 'type <name>' keyword, typically BEFORE you use it, so at the top of the file
// <name> could be anything but the ones that are built in into JS like Date
// This can be used in conjunction with Union Types
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';

function combineAlias(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor // Union Type combined with Literal Type
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(combinedNames);

console.log(combineLiteral('5','5', 'as-number'))

// Type Aliases are really useful, as you can encode more complex type definitions into your own type names
// and reuse that everywhere, and write code quicker and be more clear in your intentions

// Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

// For example:

// type User = { name: string; age: number };
// const u1: User = { name: 'Max', age: 30 }; // this works!
// This allows you to avoid unnecessary repetition and manage types centrally.

// For example, you can simplify this code:

// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }
// To:

// type User = { name: string; age: number };
 
// function greet(user: User) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: User, checkAge: number) {
//   return checkAge > user.age;
// }