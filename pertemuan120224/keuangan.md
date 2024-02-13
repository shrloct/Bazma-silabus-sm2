<!-- TABLE -->
### Membuat database
CREATE DATABASE IF NOT EXISTS keuangan_pribadi;

### Menggunakan database yang telah dibuat
USE keuangan_pribadi;

### Tabel untuk mencatat pendapatan
 create table pendapatan(
     id_pendapatan int auto_increment primary key,
     keterangan varchar(255),
     jumlah decimal(10, 2), 
     tanggal date);

### Tabel untuk mencatat pengeluaran
CREATE TABLE Pengeluaran (
    id_pengeluaran INT AUTO_INCREMENT PRIMARY KEY,
    keterangan VARCHAR(255),
    jumlah int,
    tanggal DATE,
    id_pendapatan INT,
    FOREIGN KEY (id_pendapatan) REFERENCES Pendapatan(id_pendapatan)
);


### Tabel untuk mencatat investasi
 create table investasi(
    id_investasi int auto_increment primary key,
    keterangan varchar(255),
    jumlah int,
    tanggal date);

### Tabel untuk mencatat tabungan
 create table tabungan(
    id_tabungan int auto_increment primary key,
    keterangan varchar(255),
    jumlah decimal(10, 2),
    tanggal date);

### LEFT JOIN
SELECT *
FROM pendapatan
LEFT JOIN pengeluaran ON pendapatan.id_pendapatan = pengeluaran.id_pendapatan;

### RIGHT JOIN
SELECT *
FROM pengeluaran
RIGHT JOIN pendapatan ON pengeluaran.id_pendapatan = pendapatan.id_pendapatan;

### INNER JOIN
SELECT *
FROM pendapatan
INNER JOIN pengeluaran ON pendapatan.id_pendapatan = pengeluaran.id_pendapatan;   



<!-- DATA -->
### Isi data contoh ke tabel Pendapatan
INSERT INTO Pendapatan (keterangan, jumlah, tanggal) VALUES
('Gaji bulan Februari', 5000, '2024-02-10');

### Isi data contoh ke tabel Pengeluaran
INSERT INTO Pengeluaran (keterangan, jumlah, tanggal, id_pendapatan) VALUES
('Beli makanan', 1000, '2024-02-12', 1),
('Bayar tagihan listrik', 500, '2024-02-14', 1);

### Tambahkan data ke tabel investasi
INSERT INTO Investasi (keterangan, jumlah, tanggal) VALUES
('Investasi reksadana', 2000, '2024-02-18'),
('Investasi saham', 1500, '2024-02-20');

### Tambahkan data ke tabel tabungan
INSERT INTO Tabungan (keterangan, jumlah, tanggal) VALUES
('Tabungan bulan ini', 7000, '2024-02-25');

### Kueri untuk menghitung tabungan dari hasil pendapatan dikurangi pengeluaran
SELECT (SELECT COALESCE(SUM(jumlah), 0) FROM Pendapatan) - (SELECT COALESCE(SUM(jumlah), 0) FROM Pengeluaran) AS tabungan;
### Penjelasan singka
COALESCE(SUM(jumlah), 0) FROM Pendapatan: Dalam contoh ini, SUM(jumlah) digunakan untuk menghitung total jumlah uang dari kolom jumlah dalam tabel Pendapatan. Ini berarti kita menjumlahkan semua nilai dalam kolom jumlah. Namun, jika tidak ada data pendapatan sama sekali (misalnya, tabel Pendapatan kosong), SUM(jumlah) akan mengembalikan NULL. Untuk menangani situasi ini, kita menggunakan fungsi COALESCE. Fungsi COALESCE akan mengembalikan nilai pertama yang tidak NULL dari daftar yang diberikan. Jadi, jika SUM(jumlah) mengembalikan NULL (karena tidak ada data), COALESCE akan mengembalikan nilai 0 sebagai gantinya. Dengan kata lain, jika tidak ada pendapatan, kita menganggap jumlahnya adalah 0.

COALESCE(SUM(jumlah), 0) FROM Pengeluaran: Langkah ini hampir sama dengan langkah pertama, namun diterapkan pada tabel Pengeluaran. Kami menggunakan SUM(jumlah) untuk menghitung total uang yang dikeluarkan dari kolom jumlah dalam tabel Pengeluaran. Kemudian, COALESCE digunakan untuk menangani jika tidak ada data pengeluaran. Jika tidak ada pengeluaran, SUM(jumlah) akan mengembalikan NULL, dan COALESCE akan mengembalikan nilai 0 sebagai gantinya.

(SELECT COALESCE(SUM(jumlah), 0) FROM Pendapatan) - (SELECT COALESCE(SUM(jumlah), 0) FROM Pengeluaran): Setelah memiliki total pendapatan dan total pengeluaran, kita menggunakan perhitungan ini untuk mengurangkan total pengeluaran dari total pendapatan. Ini memberi kita selisih antara uang yang masuk dan uang yang keluar, yang pada dasarnya adalah nilai tabungan.

Jadi, COALESCE digunakan untuk menangani jika tidak ada data yang dikembalikan oleh SUM (NULL), dan SUM digunakan untuk menghitung total jumlah uang dalam kolom tertentu.

### Kueri untuk menghitung total semua tabungan
SELECT 
    (SELECT COALESCE(SUM(jumlah), 0) FROM Pendapatan) - (SELECT COALESCE(SUM(jumlah), 0) FROM Pengeluaran) +
    (SELECT COALESCE(SUM(jumlah), 0) FROM Tabungan) AS total_semua_tabungan;

### menghapus semua tabel
DROP TABLE IF EXISTS Pendapatan, Pengeluaran, Tabungan, Investasi;