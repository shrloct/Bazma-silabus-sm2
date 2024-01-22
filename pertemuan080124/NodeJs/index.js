const names = "Sahrul Romadhon";
console.log(names);

const age = 17;
const year = 2024;

const pengurangan = year - age;
console.log(pengurangan);

function dataDiri(nama) {
    return `Nama saya ${nama} dan umur saya ${age}.`
}

console.log(dataDiri("Sahrul R"))


// Tugas
const funcNameKelas = async (kode, namaKelas) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ kode, namaKelas });
        }, 1000);
    })
};
const getNameKelas = async (id) => {
    const getName = id === 1 ? await funcNameKelas("SIJA", "Sistem Informasi Jaringan & Aplikasi") : id === 2 ? await funcNameKelas("RPL", "Rekayasa Perangkat Lunak") : await funcNameKelas("MM", "Multi Media")
    return { id, getName }
}

const getDataNamaKelasAsync = async () => {
    const getDataNameKelas = await getNameKelas(1)
    console.log(getDataNameKelas)
    const getDataNameKelas2 = await getNameKelas(2)
    console.log(getDataNameKelas2)
    const getDataNameKelas3 = await getNameKelas(3)
    console.log(getDataNameKelas3)
}

getDataNamaKelasAsync()
