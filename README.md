#Example

```shell
$ npm install sensitive_words_filter --save
```

```javascript
const {sensitiveWords} = require('sensitive_words_filter')
// ES2015 modules
import {sensitiveWords} from 'sensitive_words_filter'

const filteredSentence = sensitiveWords('The have five apples, you have two oranges', ['apples', 'oranges'])

console.log(filteredSentence);
// The have five *****, you have two *****
```
