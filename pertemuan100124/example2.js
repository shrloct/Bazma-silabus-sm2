const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// cek folder ada atau tidak, jika tidak maka buatkan foldernya
const directory = './db';
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
}

// cek file, ada atau tidak, jika tidak maka buatkan foldernya
const cekFile = './db/data.json';
if (!fs.existsSync(cekFile)) {
    fs.writeFileSync(cekFile, '[]', 'utf-8');
}

const questionExample = (pertanyaan) => {
    return new Promise((resolve, rejects) => {
        rl.question(pertanyaan, (jawaban) => {
            resolve(jawaban);
        })
    })
}

const addData = async () => {
    const nama = await questionExample("Masukan nama Anda: ");
    const umur = await questionExample("Masukan umur Anda: ");
    const hobi = await questionExample("Masukan hobi Anda: ");

    const data = { nama, umur, hobi };
    const fileDb = fs.readFileSync('./db/data.json', 'utf8')
    const dataDiri = JSON.parse(fileDb)

    dataDiri.push(data)
    fs.writeFileSync('./db/data.json', JSON.stringify(dataDiri, null, 2))
    console.log('Trims sudah memperkenalkan diri👊')
    rl.close()
}

addData()