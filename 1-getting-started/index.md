What is TypeScript?
- A programming language building up on JavaScript.
- Adds new features and advantages to JavaScript
- Can't be executed by JS ENVIRONMENTS like the browser and Node.js
- It's a tool to compile TS code to JS code
- Adds Types

Why TypeScript?
function add(num1, num2) {
  return num1 + num2;
}
console.log(add('2','3'));

The output would concatenate the numbers instead of add them because they are strings
We want to add the two numbers together though
With TypeScript, we can assert what kind of input we get from the user to achieve the intended result

TypeScript forces us to write better, cleaner, and less error-prone code

TypeScript adds TYPES - we have to be way more explicit about how things work
This way we can avoid many unexpected and unnecessary errors using Types

TypeScript allows us to use certain next gen JavaScript features that we can use in our TS files and then would be compiled
into Vanilla JS code to workarounds that work in older browsers 

TypeScript adds non JS features like Interfaces and Generics, they help us during development that gives us clearer errors
and helps us avoid even more errors