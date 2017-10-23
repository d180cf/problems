const fs = require('fs');
const glob = require('glob');

exports.dirs = [...function* dirs() {
    for (const dirpath of glob.sync('**/sgf.json')) {
        const dir = JSON.parse(fs.readFileSync(dirpath, 'utf8'));
        const pattern = dirpath.replace('/sgf.json', '/**/*.sgf');

        dir.problems = glob.sync(pattern).map(path => {
            return {
                path: path,
                toString() {
                    return fs.readFileSync(path, 'utf8');
                }
            };
        });

        yield dir;
    }
}()];
