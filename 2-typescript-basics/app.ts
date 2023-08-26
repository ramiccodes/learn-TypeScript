let userInput: unknown;
let userName: string;

// In an unknown type, we can store any value in there without getting errors
// But 'unknown' is different from 'any'
// Using the 'unknown' type, we must check the type that's currently stored in the userInput before we can assign it to a variable

if (typeof userInput === 'string') {
  userName = userInput;
}