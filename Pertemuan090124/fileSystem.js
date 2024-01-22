const fs = require('fs')


// writteFileSystem
fs.writeFileSync("perkenalkan.txt", "Perkenalkan saya Sahrul")
console.log(fs)

// readFileSystem
const perkenalan = fs.readFileSync("perkenalkan.txt")
console.log(perkenalan.toString())

// unlinkFileSync
try {
    fs.unlinkSync('perkenalkan.txt');
    console.log('Add file succes')
} catch (error) {
    console.log(error);
}

// mkdirSync
try {
    fs.mkdirSync('pertemuan100124');
    console.log('Add file succes')
} catch (error) {
    console.log(error);
}

