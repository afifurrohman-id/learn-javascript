# Looping

- For (for)

```
for(let i = 0;i <= 5; i++) {
    console.log(i)
}

```
> let i is initial value and block 2 i <= 5 is condition to terminate and i++ to increment value every looping

- For of
> ...

- For in
> ...

- While (while)

```
let x = true
let b = 5

while (x) {
  console.info('Hi!')
  if (b === 8) {
    x = false
  }
  b++
}

```

> You can terminate in while block statement, while(x) the x is truthy value

- Do While (do.. while)

```
let x = 12

do {
    console.log('Hello world')
    x--
} while(x >= 5 )
```
> Run once and next what to terminate, the x-- is decrement