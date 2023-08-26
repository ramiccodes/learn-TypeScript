let userInput: unknown;
let userName: string;

// In an unknown type, we can store any value in there without getting errors
// But 'unknown' is different from 'any'
// Using the 'unknown' type, we must check the type that's currently stored in the userInput before we can assign it to a variable

if (typeof userInput === 'string') {
  userName = userInput;
}

// The 'never' type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code};
}

generateError('An error ocurred!', 500)

// this generateError function will be of the 'never' type as a return value because it NEVER returns anything because when throwing
// an error, this crashes the program, stopping the execution of the code