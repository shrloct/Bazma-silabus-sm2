const day = (kode, namahari) => {
    return { kode, namahari }
}

const getDay = (kodeId) => {
    const hari = kodeId === 1 ? day(1, "Senin") :
        kodeId === 2 ? day(2, "Selasa") :
            kodeId === 3 ? day(3, "Rabu") :
                kodeId === 4 ? day(4, "Kamis") :
                    kodeId === 5 ? day(5, "Jumat") :
                        day(null, "Hari Libur");
    return { kodeId, hari }
}
module.exports = getDay;