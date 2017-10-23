The main script provides API to access the SGF files:

```js
const sgf = require('sgf-problems');

for (const dir of sgf.dirs)
    for (const sgf of dir.problems)
        console.log(sgf.path + ': ' + sgf);
```
