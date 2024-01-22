// 1. Hari senin - jumat

function namaHari(hari) {
    switch (hari) {
        case 1:
            return "Hari Sein"
            break;
        case 2:
            return "Hari Selasa"
            break;
        case 3:
            return "Hari Rabu"
            break;
        case 4:
            return "Hari Kamis"
            break;
        case 5:
            return "Hari Jum'at"
            break;

        default:
            return "Hari Libur"
            break;
    }
}

module.exports = { namaHari }