const fs = require('fs');
const archiver = require('archiver').default || require('archiver');

const output = fs.createWriteStream('dist.zip');

const archive = archiver('zip', {
    zlib: {
        level: 9
    }
});

output.on('close', () => {
    console.log('Compression Completed');
    console.log(
        'ZIP Size:',
        (archive.pointer() / 1024 / 1024).toFixed(2),
        'MB'
    );
});

archive.on('warning', (err) => {
    if (err.code === 'ENOENT') {
        console.warn(err);
    } else {
        throw err;
    }
});

archive.on('error', (err) => {
    throw err;
});

archive.pipe(output);

archive.directory('dist/', false);

archive.finalize();