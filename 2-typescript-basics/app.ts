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