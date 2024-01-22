const getKelas = (kode) => {
    const kelas = kode === 1 ? "SIJA" : kode === 2 ? "RPL" : "TKJ";
    return { kode, kelas }
}
// console.log(getKelas(1))
// console.log(getKelas(2))
// console.log(getKelas(6))


// cara 2 dengan menambahkan kepanjangan dari kode kelas 
const functionKelas = (kode, deskripsi, kelas) => {
    return { kode, deskripsi, kelas }
}

const getKelasDeskripsi = (kodeId) => {
    const kelas = kodeId === 1 ? functionKelas("SIJA", "Sistem Informasi Jaringan dan Aplikas", 11) : functionKelas("RPL", "Rekayasa Perangkat Lunak", 12)
    return { kodeId, kelas }
}
// console.log(getKelasDeskripsi(1))
// console.log(getKelasDeskripsi(2))


// membuat 5 parameter data object bentuk item game (ml, ff, pb, pubg, ghensine)
const getData = (negara, provinsi, kabupaten, kecamatan, desa) => {
    return { negara, provinsi, kabupaten, kecamatan, desa }
}
const getDeskData = (kodeData) => {
    const data = kodeData === 1 ? getData("Indonesia", "Jawa Barat", "Bogor", "Ciampea", "Cicadas") : getData("Jepang", "prefektur Osaka", "Osaka", "mura", "Gun");
    return { kodeData, data }
}
// console.log(getDeskData(1))
// console.log(getDeskData(2))


// menambah multimedia 
const classfunc = (kode, namaKelas) => {
    return { kode, namaKelas }
}


const kelasBaru = (id) => {
    if (id === 1) {
        return classfunc("SIJA", "Sistem Informasi Jaringan dan Aplikasi")
    } else if (id === 2) {
        return classfunc("RPL", "Rekayasa perangkat Lunak")
    } else if (id === 3) {
        return classfunc("MM", "Multi Media")
    }
    return { id }
}

// // async
// const getKelasAsync = async (kodeId) => {
//     const kelas = kodeId === 1 ? "SIJA" : "RPL";
//     return { kode, kelas }
// }
const getKelasAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kelas = id === 1 ? "SIJA" : "RPL";
            resolve({ id, kelas });
        }, 1000); // Menambahkan penundaan 1 detik untuk mensimulasikan operasi asynchronous
    });
};

const kelasAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let kelas
            if (id === 1) {
                kelas = classfunc("SIJA", "Sistem Informasi Jaringan dan Aplikasi")
            } else if (id === 2) {
                kelas = classfunc("RPL", "Rekayasa Perangkat Lunak")
                resolve({ id, kelas })
            }
        }, 1000)
    })
}


module.exports = { kelasBaru, getKelasAsync, kelasAsync }

