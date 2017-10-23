const fs = require('fs');
const glob = require('glob');

/** Reads all SGF files and returns a JSON with paths to them. */
exports.getManifest = function getManifest() {
    const manifest = {
        time: new Date,
        dirs: []
    };

    for (const dir of glob.sync('**/sgf.json')) {
        const info = JSON.parse(fs.readFileSync(dir, 'utf8'));
        info.problems = glob.sync(dir.replace('/sgf.json', '/**/*.sgf'));
        manifest.dirs.push(info);
    }

    return manifest;
}
