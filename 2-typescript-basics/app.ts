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