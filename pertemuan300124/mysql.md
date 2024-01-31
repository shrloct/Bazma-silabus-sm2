### Membuat database baru bernama smk_personal 
create smk_personal

### Mengubah ke tabel smk_personal
use smk_personal

### Membuat tabel sekolahan dengan kolom-kolom: id, nama_sekolah, jurusan, kapasitas_siswa, dan alamat.
create table sekolahan(      
    -> id int primary key not null, 
    -> nama_sekolah varchar(255),   
    -> jurusan varchar(25),
    -> kapasitas_siswa int,
    -> alamat varchar(255)          
    -> );
### Memasukkan sepuluh baris data ke dalam tabel sekolahan.
insert into sekolahan (id, nama_sekolah, jurusan, kapasitas_siswa, alamat) values (1, "SMK TI BAZMA", "SIJA", 90, "Ciampea Bogor"),(2, "SKAY", "Mesin", 2390, "Ciampea Bogor"),(3, "SMA 1 LEUWILIANG", "TKJ", 3290, "Bogor Barat"),(4, "SMK Muhammdiyah", "Farmasi", 430, "Bogor Barat"),(5, "SMK BUZET", "Bogor Barat", 950, "Cibatok"),(6, "SMK BIZHER", "TEMPUR", 2000, "Tangerang"),(7, "SMK PANDU", "TataBoga", 900, "Bogor Barat"),(8, "SMANIC", "MESIN", 1200, "Ciampea Bogor"),(9, "SMK PELITA", "TKJ", 350, "Ciampea Bogor"),(10, "SMK MANDALA", "RPL", 2000, "Bogor Barat")

### Menampilkan semua data dari tabel sekolahan.
select* from sekolahan;

### Menampilkan data dari tabel sekolahan yang memiliki id sama dengan 1.
select * from sekolahan where id = 1;

### Menampilkan data dari tabel sekolahan yang memiliki alamat sama dengan "Leuwisadeng".
select * from sekolahan where alamat = "Leuwisadeng";

### Mengupdate nilai kolom nama_sekolah menjadi "SMK Ti Bazma" untuk data yang memiliki id sama dengan 1.
update sekolahan set nama_sekolah = "SMK Ti Bazma" where id = 1;

### Mengupdate nilai kolom jurusan menjadi "SIJA" untuk data yang memiliki nama_sekolah sama dengan "SMANIC".
update sekolahan set jurusan = "SIJA" where nama_sekolah = "SMANIC";

### Menghapus data dari tabel sekolahan yang memiliki nama_sekolah sama dengan "SMK MANDALA"
delete from sekolahan where nama_sekolah = "SMK MANDALA";

### Pemilihan Data Berdasarkan Alamat atau Jurusan
select * from sekolahan where alamat = "Ciampea Bogor" or jurusan = "SIJA";

### Pemilihan Data Berdasarkan Jurusan dan Kapasitas Siswa
select* from sekolahan where jurusan = "SIJA" AND kapasitas_siswa >=50;

### Pemilihan Data Berdasarkan Kombinasi Kriteria
select* from sekolahan where (jurusan = "SIJA" AND kapasitas_siswa >=50) or (jurusan = "RPL" AND kapasitas_siswa >100);

### NOT 
select * from sekolahan where NOT alamat = "..."; 
select * from sekolahan where NOT jurusan = "..."; 
select * from sekolahan where NOT alamat = "..." AND NOT jurusan = "...";
select * from sekolahan where NOT jurusan = "..." AND kapasitas_siswa <= ...;
select * from sekolahan where jurusan = "SIJA" AND NOT alamat = ...
select * from sekolahan where alamat Not IN ('Bogor', 'Ciampea Bogor');

### Order By
- Descending => dimulai dari tulisan z-a/ id/ creates_at(tanggal_buat)
   select * from sekolahan order by jurusan desc;
- Ascending => dimulai dari a-z/ id/ created_at (tanggal_buat)
   select * from sekolahan order by jurusan asc;

### LIMIT
<!-- membatasi jumlah data -->
select * from sekolahan limit 9;
<!-- membatasi jumlah data dengan desc / asc -->
select * from sekolahan  order by jurusan desc limit 3;
<!-- dengan where dan membatasi jumlah dengan desc / asc -->
select * from sekolahan where jurusan limit limitation;

select * from sekolahan where jurusan = "SIJA" order by id desc limit 1;

### LIKE 
<!-- dari huruf/angka depan -->

-- Mencari nama jurusan diawali dengan huruf S
SELECT * FROM sekolahan WHERE jurusan LIKE 'S%';

-- Mencari nama sekolah yang berakhiran dengan SMK
SELECT * FROM sekolahan WHERE nama_sekolah LIKE '%SMK';

-- Mencari nama sekolah yang mengandung SMK(baik di awal, di tengah, atau di akhir):
SELECT * FROM sekolahan WHERE nama_sekolah LIKE '%SMK%';

### aliases
-- mendefinisikan pergantion field
select nama_sekolah as namaSekolah from sekolahan;
select id as No from sekolahan;

--nama_sekolah
select nama_sekolah as namaSekolah from sekolahan;
select id, nama_sekolah as namaSekolah, jurusan, kapasitas_siswa as kapasitasSiswa from sekolahan;

### In

SELECT column-name(s)
FROM table-name
WHERE  column-name IN (SELECT STATEMENT);

SELECT * FROM tabel WHERE condition IN(s)

--mencari jurusan SIJA dan TKJ
SELECT  * FROM sekolahan WHERE jurusan IN ('TKJ', 'SIJA');
--mencari jurusan selain SIJA dan TKJ
SELECT  * FROM sekolahan WHERE jurusan NOT IN ('TKJ','SIJA');



### PERPUSTAKAAN ####


 create table perpustakaan(
    -> id int primary key auto_increment not null, 
    -> judul varchar(400),   
    -> kategory varchar(255),
    -> deskripsi text,
    -> penulis varchar(255),
    -> penerbit varchar(255),
    -> tahun_terbit int,
    -> jumlah_halaman int,
    -> batas_umur int,
    -> isbn int,
    -> harga int,
    -> );


insert into perpustakaan (judul, kategory, deskripsi, penulis, penerbit, tahun_terbit, jumlah_halaman, batas_umur, isbn, harga) values ("Belajar HTML CSS Dasar", "Coding", "Belajar Pemrograman Dasar dari kecil", "Jamal", "Coding Hits", 2024, 224, 10, 1234254534, 5000),("Belajar CSS Dasar", "Coding", "Belajar Styling dari dasar", "Asep", "Coding Hits", 2024, 102, 16, 2147483647, 10000),("Belajar Javascript Dasar", "Coding", "Belajar logika dari dasar", "Udin", "Coding Hits", 2024, 443, 17, 99239932, 55000),("Buku Tambahan 1", "Fiksi", "Cerita tambahan", "Penulis A", "Penerbit X", 2023, 150, 12, 987654321, 3000),("Buku Tambahan 2", "Non-Fiksi", "Buku referensi", "Penulis B", "Penerbit Y", 2022, 200, 16, 123456789, 7500);

### Tugas
1. Filtering data (where)
2. Cari data dengan (like) = judul, kategori, penulis
3. Data id Desc
4. Filtering jumlah halaman >= & < & = (bebas)
5. Tahun terbit >= 2020 =< 2026
6. Batas Umur dimulai dari 8 s/d 20
7. Harga dimulai dari desc / asc
8. Harga range dari bebas - bebas (1  - 100000000)
9. Harus ada update delete

Belajar membuat database perpustakaan [namamu - XI - Backend Developer]


TERIMA KASIH SUDAH MENONTON SEMOGA BERMANFAAT