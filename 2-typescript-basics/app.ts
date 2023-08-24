// Object Types
// The types we looked so far are number, string, and boolean
// The fourth one is the object type
// An example would be {age:30}
// It is any JavaScript object, more specific types (type of object) are possible

const person: {
  name: string,
  age: number
} = {
  name: 'Max',
  age: 30
}

console.log(person.name)

// The key values are inferred types:
// name key has a value with a string type
// age key has a value with a number type

// You could explicitly assign a type to the person object
// Adding ": {}" after person is the same as ": object"
// TS gives out an error however if we try an access a value with a key using dot notation even if it exists

// We have to be more specific
// We can make another object but this time keys with the values that are types
// You could also put a specific value

// This is not good practice however, it's better to let TS infer objects like the one below
const inferPerson = {
  name: 'James',
  age: 23
}

// Nested Objects & Types
// Of course object types can also be created for nested objects.

// Let's say you have this JavaScript object:

// const product = {
//   id: 'abc1',
//   price: 12.99,
//   tags: ['great-offer', 'hot-and-new'],
//   details: {
//     title: 'Red Carpet',
//     description: 'A great carpet - almost brand-new!'
//   }
// }
// This would be the type of such an object:

// {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   }
// }
// So you have an object type in an object type so to say.



// TypeScript Arrays
const arrayPerson = {
  name: 'Jessie',
  age: 23,
  hobbies: ['Football', "Parasailing"]
}

// hobbies' TS inferred type is string[]

let activities: string[];
activities = ['Sports']
// If you put something other than an array in a string[] type, you will get an error

// If you want to support a mixed array, use any[]
let randomValuesArray: any[];
// any[] is flexible but you'd be giving up all the benefits of TypeScript

for (let hobby of arrayPerson.hobbies) {
  console.log(hobby.toUpperCase());
}

// TS inferred that hobby is a string type, this is why the method .toUpperCase() 
// can be used without TS complaining


// Tuple type
// Other programming languages have tuples, but JS doesn't
// An example of a tuple would be: [1,2]
// It looks like an array, and it is. But it's a FIXED LENGTH ARRAY and also FIXED TYPE (Added by TypeScript)

const tuplePerson: {
  name: string,
  age: number,
  role: [number, string]
} = {
  name: 'Bobby',
  age: 20,
  role: [2, "author"]
}

// TS infers role as (string | number)[]
// TS thinks that we have an array which might hold strings or numbers 
// This is called a Union-Type, and will be saved for later
// The downside with role is that you can use method that mutate the values because it is a union type
// But we want the exact structure of [2, "author"] (two elements, first element: number, second element: string)
// For this purpose, a tuple would be perfect
// The specify typing format of "role: [number, string]" is how you would make a tuple type
// So if you try to put another value instead of the specified type in the order like:
// role: ['hello', 2]
// This would throw out an error
// Or if you try and make tuple with the wrong amount:
// role: [2, "author", "tolkien"] (3 items in the tuple instead of 2)

// When working with an array that you already know the specific length and types of values in it,
// you might want to consider a tuple, to get more strictness in your app to be even clearer about
// the type of data you're working with and the type of data you're expecting


// Working with enums
// Enum example:
// enum{NEW, OLD}
// Added by TypeScript: Automatically enumerated global constant identifiers 

// We create an enum with the 'enum' keyword
// Convention to capitalize first letter 
enum Role {ADMIN, READ_ONLY, AUTHOR};

const enumPerson = {
  name: 'Adam',
  age: 24,
  role: Role.ADMIN
}

if (enumPerson.role === Role.ADMIN) {
  console.log('is admin')
} else if (enumPerson.role === Role.AUTHOR) {
  console.log('is author')
}