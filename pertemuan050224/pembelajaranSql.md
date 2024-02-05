### membuat database baru
create database ...

### membuat table author, rak, buku di dalam database tersebut
CREATE TABLE `author` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nama_author` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `rak` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nomor_rak` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)_
);

CREATE TABLE `buku` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nama_buku` VARCHAR(255) NOT NULL,
  `halaman_buku` INT NOT NULL,
  `author_id` INT,
  `rak_id` INT,
  `rilis_buku` DATE NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`author_id`) REFERENCES `author`(`id`),
  FOREIGN KEY (`rak_id`) REFERENCES `rak`(`id`),
  ON DELETE CASCADE
);

### menambahkan 5 data baru di masing-masing table
insert into author (nama_author) values ('...'), ('..');
insert into rak (nomor_rak) values ('..'), ('...');
insert into buku (nama_buku, halaman_buku, author_id, rak_id, rilis_buku) values ('...', ..., ..., ..., '....'), 
                 ('...', ..., ..., ..., '...');

### menggabungkan semua tabel mengunakan query
SELECT
    buku.nama_buku,
    buku.rilis_buku,
    author.nama_author,
    rak.nomor_rak
FROM
    buku
JOIN author ON buku.author_id = author.id
JOIN rak ON buku.rak_id = rak.id;

### menghapus data dengan referensi
DELETE FROM `buku` WHERE `id` = 1;
DELETE FROM `author` WHERE `id` = 1;

### Bermain dengan Constraint ON DELETE dan ON UPDATE
ALTER TABLE `buku` DROP FOREIGN KEY `buku_ibfk_1`;
ALTER TABLE `buku` DROP FOREIGN KEY `buku_ibfk_2`;
ALTER TABLE `buku`
ADD CONSTRAINT `buku_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `author`(`id`) ON DELETE SET NULL ON UPDATE CASCADE,
ADD CONSTRAINT `buku_ibfk_2` FOREIGN KEY (`rak_id`) REFERENCES `rak`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

### Memahami LEFT JOIN, RIGHT JOIN, Dan JOIN
# LEFT JOIN
SELECT
  buku.nama_buku,
  author.nama_author
FROM
  buku
LEFT JOIN author ON buku.author_id = author.id;

# RIGHT JOIN
SELECT
  buku.nama_buku,
  rak.nomor_rak
FROM
  buku
RIGHT JOIN rak ON buku.rak_id = rak.id;

# INNER JOIN (JOIN)
SELECT
  buku.nama_buku,
  author.nama_author,
  rak.nomor_rak
FROM
  buku
JOIN author ON buku.author_id = author.id
JOIN rak ON buku.rak_id = rak.id;

### FOREIGN KEY adalah kolom atau kelompok kolom dalam sebuah tabel basis data yang merujuk ke kunci utama (Primary Key) dari tabel lain.

### JOIN yaitu salah satu fungsi yang ada di SQL yang digunakan untuk penggabungan table melalui kolom atau key tertentu dimana memiliki nilai terkait untuk mendapatkan satu set data dengan informasi lengkap 

### INNER JOIN yaitu membandingkan record disetiap table untuk dicek apakah nilai sama atau tidak. JIka kedua nilai table sama, maka akan terbentuk table baru yang hanya menampilkan record yang sama dari kedua table.

### LEFT JOIN itu menghasilkan nilai berdasarkan table kiri (left table) dan nilai yang sama di table kanan (right table). Jika table kiri tidak sama dengan table kanan, maka akan diisi dengan nilai "NULL" pada table kanan.

### RIGHT JOIN hampir sama seperti LEFT JOIN hanya menjadi master adalah table kanan (rigth table). Jika table kiri tidak sama dengan table kanan, maka akan diisi dengan nilai "NULL" pada table kiri.
