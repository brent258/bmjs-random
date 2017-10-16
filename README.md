# bmjs-random
A simple function to give you a random selection from input parameters.

*Example usage:*
```javascript
const random = require('bmjs-random');

let randomString = random('foo','bar','baz');
console.log(randomString); // random selection from 'foo', 'bar', 'baz'

let randomNumber = random(1,2,3);
console.log(randomNumber); // random selection from 1,2,3
```
