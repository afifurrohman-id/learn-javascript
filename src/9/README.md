# Switch Case 

- Switch case is Just like if else, but with case

```
const language = 'assembly'

switch (language) {
  case 'java':
    console.info('The object oriented programming')
    break
  case 'c':
  case 'assembly':
    console.info('The low level of programming language')
    break
  default:
    console.info('JavaScript is a prototype language')
}

```

> After case must be break if no break, then should next case(for example the c is same as assembly so you can use without break)