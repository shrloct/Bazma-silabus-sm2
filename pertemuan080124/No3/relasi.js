function spesifikasiRapor(nilai) {
    switch (nilai) {
        case 100:
            return "Terbaik"
        case 90:
            return "Cukup Baik"
        case 80:
            return "Baik"
        case 60:
            return "Harus Semangat"
        default:
            return "Remedial"
    }
}
module.exports = spesifikasiRapor;