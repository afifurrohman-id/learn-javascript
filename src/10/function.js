// * Function

// ! Function Declaration
function add(value1, value2) {
    return value1 + value2
}

console.info(add(3,3))

// result
// 6

// ! Arrow Function
const sayHello = name => `Hello, ${name}`

console.info(sayHello('Afif'))

// result
// Hello Afif

// ! Anonymous Function
console.info(((a,b) => a * b)(3,3)) 

// result 
// 9


// TODO: Arguments
function sayName(name) {
    console.info(...arguments)
    console.log(`Your name is ${name}`)
}
sayName('Afif', 'Michael', 'desi', 'unknown')

// result
// Afif Michael desi unknown
// Your name is Afif
