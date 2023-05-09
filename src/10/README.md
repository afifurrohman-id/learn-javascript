# Function 
> With function you can return and use the argument

- Function 
```
function add(value1, value2) {
    return value1 + value2
}

add(1,2)
```
> This is example how to create a function with two argument: value1, value2 and with return add the value1 and value2

### Arguments
> What happen if my function just have a one argument but i call the function with two argument?
```
    function sayName(name) {
        console.info(...arguments)
        console.log(`Your name is ${name}`)
    }
    sayName('Afif', 'Michael')
```

- If you call function with other argument and not in your function this argument is save in arguments, the ... keyword is called spread operator, this allow you to extract the value from arguments

### Arrow Function 
> since es6 javascript can made a function with simple keyword () => {}
```
const multiply = (a,b) =>  a * b

multiply(3,3)
```
> same as if else, if the return just one line you can use without {}, or the argument just one you can use without ()

- Anonymous function (immediately invoke function expression)
```
    console.info((name => `Hello ${name}`)('Afif'))
```
> you can use () to wrapping the function and use () again to run function and insert a argument
