// async fs

const { readFile, writeFile } = require('fs');
readFile('./expam/MyFile.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./expam/MyFile2.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result;
        writeFile('./expam/MyFile3.txt', `here is the result${first} ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            console.log(result);
        })
    })
})