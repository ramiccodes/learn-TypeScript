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
