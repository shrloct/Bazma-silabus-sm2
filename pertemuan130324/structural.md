- menginstal npm init -y(✔)
- Selanjutnya mengubah main pada package json dari index.js menjadi app.js(✔)
- Membuat file app.js(✔)
- Membaut folder db/connection.js(✔)
- Menginstal npm install express body-parser mysql2 cors(✔)
- Menginstal npm install -g nodemon (✔)
- Buat file dengan nama .gitignore (✔)
- Membuat database baru dengan nama smk_bazma_todo (✔)
- Konfigurasi db/connection.js ke mysql (✔)
- Konfigurasi app.js(✔)
- Buat table todo: id, title, description(✔)
     create table todo(
    -> id int primary key auto_increment,
    -> title varchar(255) not null,
    -> description text); 
- Jalankan nodemon(✔)
- Konfigurasi membaca file todo rest api(✔)
- Menjalankan mengambil data todos menggunakan thunder clients
- Konfigurasi menambahkan data todo rest api(✔)
- menjalankan menambahakan data baru todo rest api menggunakan thunder clients(✔)
    -- setting headers = Accept = aplication/json(✔)
- Membuat validasi untuk mengirim data todo yang wajib diisikan, artinya validasi tersebut harus jalan dengan npm validator
    "title.required": "Title wajib disikan";
    "title.min": "Title minimal  1 karakter";
    "title.max": "Title  maksimal 255 karakter";
- Konfigurasi mengubah data todo berdasarkan id rest api menggunakan thunder clients(✔)
- [Tugas] melakukan validation ketika di update datanya melalui id tidak boleh kosong dengan poin mengirim data (✔)
    "title.required": "Title wajib disikan";
    "title.min": "Title minimal  1 karakter";
    "title.max": "Title  maksimal 255 karakter";
- Konfigurasi delete data todo berdasarkan id rest api menggunakan thunder clients(✔)
- Konfigurasi melihat data todo berdasarkan id rest api menggunakan  thunder clients(✔)
- Konfigurasi bug affectedRows menjadi length(✔)
- Membuat Folder Helper(✔)
    - Membuat file responJson.js(✔)