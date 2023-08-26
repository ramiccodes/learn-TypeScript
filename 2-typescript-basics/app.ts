// Functions
function add(n1: number, n2: number):number {
  return n1 + n2;
}
// This function returns a number type

// We can explicitly assign a return type by adding a colon after the paramters and the name of the type

function printResult(num: number) {
  console.log('The result is: ' + num);
}
// Initially, you might think that this function returns a string type, given that the end product is converted to string
// But, in this function, nothing was returned but only console logged
// So the return type of this function is the 'void' type

printResult(add(9, 10));

// The 'void' type could be found in other programming languages
// But does not exist in JS. but TS does
// You don't need to explicitly type it as a 'void' type because TS' type inference does it for you

// In JS, if we use the return value of a function that doesn't return anything, we get 'undefined' as a value 

// 'undefined' is also a type in TS

let combineValues; // TS inferred as an 'any' type
combineValues = add;
// If we want combineValues to only hold a function, having an 'any' type will not stop us from
// changing its values and eventually its type
console.log(combineValues(5, 5));

// We can set the type of the variable to a 'Function' type (F is capitalized because function is a keyword to make functions)
let combineValuesFunction: Function;
combineValuesFunction = printResult;
console.log(combineValuesFunction(combineValues(5, 5)));

// The problem comes with function with multiple parameters, however
// To make it more precise, we must make a function type to specify the return type of the function and the number of parameters
let combineValuesTypes: (a:number, b: number) => number;