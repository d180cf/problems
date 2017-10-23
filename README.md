The main script provides API to access the SGF files:

```js
const sgf = require('sgf-problems');

for (const dir of sgf.dirs)
    for (const sgf of dir.problems)
        console.log(sgf.path + ': ' + sgf);
```

The SGF can be parsed:

```js
const sgf = require('sgf-problems');
const tsumego = require('tsumego.js'); // 1.x

for (const dir of sgf.dirs) {
    for (const sgf of dir.problems) {
        const board = new tsumego.Board(sgf + '');
        console.log(sgf.path);
        console.log(board + '');
    }
}
```
