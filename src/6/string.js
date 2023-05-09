// * String

// ! Single Quote
console.log('Hello')

// result
// hello

// ! Double Quote
console.log("Hi!")

// result
// hi

// ! Back Ticks
console.log(`Hello World`)

// result
// Hello World

// ? You cannot use like this
// console.log('What's Up') // ? This is tell you error because javascript read the end of string in second quote

// TODO: The solution
console.log('What\'s Up') // * Escape character
// or
console.log("What's Up")
// Also 
console.log(`What's Up`)


// ! Template Literal

const myName = 'Afif'
console.info(`My name is ${myName}`)

// result 
// My name is Afif