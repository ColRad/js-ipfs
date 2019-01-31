const path = require('path');
const fs = require('fs');
const glob = require('glob');
const { exec } = require('pkg');

const targetPlatform = process.platform.replace('darwin', 'macos');

const target = `node10-${targetPlatform}-x64`;
const outDir = 'pkg';
exec(['package.json', '--target', target, '--out-dir', outDir]).then(() => {
    let basePath = 'node_modules';
    let nativeModules = ['keccak', 'leveldown', 'rabin', 'secp256k1', 'ursaNative'];

    nativeModules.forEach((m) => {
        glob(path.join('..', '**', `${m}.node`), function (err, files) {
            if (err) throw err;
            if (!files || files.length === 0) throw new Error(`Error finding .node file for module ${m}`);
            fs.copyFileSync(files[0], path.join(outDir, path.basename(files[0])));
        });
    });
}).catch(e => {
    console.error(e);
});
