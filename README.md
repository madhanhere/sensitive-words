#Example

```shell
$ npm install sensitive-words --save
```

```javascript
const {sensitiveWords} = require('sensitive-words')
// ES2015 modules
import {sensitiveWords} from 'sensitive-words'

const filteredSentence = sensitiveWords('The have five apples, you have two oranges', ['apples', 'oranges'])

console.log(filteredSentence);
// The have five *****, you have two *****
```
