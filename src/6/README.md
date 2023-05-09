# String

- single quote
> ```'Hello'```

- Double Quote
> ```"hello"```

- Back ticks
> ```(`Hello`)```

There no difference on the single quote or double quote, but if you using text like this: 
```'don't repeat yourself'``` **X**. You cannot use this format because javascript using the second quote to end the string, So the solution is use this: 
```'don\'t repeat yourself'``` The back slash after quote is called escape character another simple solution you can use ```""``` or ```(`)```

### Template Literal

- You can use back ticks to print variable, run function and etc.. for example:
```
const a = 5

console.log(`Value a is ${a}`)
```
> Result: Value a is 5 (The ${} is for variable function or etc.. you want to print)