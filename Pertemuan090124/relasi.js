function namaRelasi(nama) {
    return `Hello I'am ${nama}`;
}

function namaDaerah(daerah) {
    return `Asal dari ${daerah}`
}

function sekolah(namaSekolah, namaJurusan) {
    const data = { namaSekolah, namaJurusan }
    return data
}

function abjadArray(abjad) {
    const abjadlama = ['a', 'b', 'c', 'd']
    if (abjad !== undefined) {
        abjadlama.unshift(abjad)
    }
    return abjadlama
}
module.exports = { namaRelasi, namaDaerah, sekolah, abjadArray }