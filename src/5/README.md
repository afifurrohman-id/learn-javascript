# Boolean


### Truthy and Falsy

- Falsy
> undefined, 0, null, ''

- Truthy 
> true, variable exists, true condition, and etc (the reverse of falsy) 

### Operator
- Operator And (&&)
```
const a = false
const b = true 

a && b
```
> And should be true and true for resolve

- Operator Or (||)
```
const x = true
const y = false

x || y
```
> Or should be one is true for resolve

- Operator Greater than equal (>=)
```
30 >= 3
```
> This is mathematic operation but return boolean (More than equal)

- Operator Less than equal (<=)
```
10 <= 20
```
> This is mathematic operation but return boolean (Less than equal)

- Strict Operator (===)
```
1 === '1'
```
> The data types and result should be same

- Not Operator (!==) 
```
10 !== 100
```
> Like a strict but for NOT