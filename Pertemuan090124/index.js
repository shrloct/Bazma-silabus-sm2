// const names = "Sahrul Romadhon";
// console.log(names);

// const age = 17;
// const year = 2024;

// const pengurangan = year - age;
// console.log(pengurangan);

// function dataDiri(nama) {
//     return `Nama saya ${nama} dan umur saya ${age}.`
// }

// console.log(dataDiri("Sahrul R"))


const { namaRelasi, namaDaerah, sekolah, abjadArray } = require('./relasi')
const { namahari, namaHari } = require('./tugas')

console.log(namaRelasi("Sahrul Romadhon"))
console.log(namaDaerah("BoGoR City"))
console.log("－－－－－－－－－－－－－－－－－－－－")
console.log(sekolah("SMK TI Bazma", "SIJA"))
console.log("－－－－－－－－－－－－－－－－－－－－")
console.log(abjadArray())
console.log(abjadArray(1))
console.log("－－－－－－－－－－－－－－－－－－－－")
console.log(namaHari(2))
