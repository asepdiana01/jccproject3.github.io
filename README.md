# Tugas Project Pendataan Bansos (Frontend JS Project)

<table style="border:none;">
    <tr>
        <td>Nama</td>
        <td>:</td>
        <td>Asep diana Saefulloh</td>
    </tr>
    <tr>
        <td>Kelas</td>
        <td>:</td>
        <td>VueJS</td>
    </tr>
    <tr>
        <td>Video Demo</td>
        <td>:</td>
        <td>
            <a 
                href="https://drive.google.com/drive/u/1/folders/1DypshOXPzR57qaY7v88oi6OTyX4MUVaE" 
                target="_blank" 
                rel="noopener">
                Link
            </a>
        </td>
    </tr>
    <tr>
        <td>Link Hasil Project</td>
        <td>:</td>
        <td>
            <a 
                href="h"
                target="_blank"
                rel="noopener"
            >
                Link
            </a>
        </td>
    </tr>
</table>

## Tentang Layout/Desain

Desain yang saya buat sangat sederhana, sedikit warna dan tidak memiliki pola atau gambar, dengan harapan supaya mudah digunakan oleh orang awam terutama orang awan usia 40-50 tahun. Desain sekilas mirip dengan google form namun saya modifikasi dibeberapa bagian dan agar sesuai dengan panduan dari Jabar Design System yang telah di berikan di materi.


### Kolom Input

Saya menggunakan jenis kolom input dengan posisi label berada diatas dan berukuran lebih kecil daripada Kolom Input, yang bertujuan supaya pengguna lebih mudah melihat mana kolom untuk diisi dan mana label.  
Dalam mempermudah pengisian sama menggunakan placeholder yang berisikan contoh atau keterangan apa yang harus diisikan atau apa yang harus dilakukan pengguna untuk mengisi kolom tersebut.

### Validasi Form

Dalam memvalidasi form saya menggunakan validasi langsung dan tidak langsung :

1. Validasi langsung, validasi langsung yang mana ketika data yang diinput kurang tepat maka kolom akan merespon dan memberitahukan apa kesalahannya dibawah kolom input yang sedang aktif.
2. Validasti tidak langsung, validasi ini saya gunakan ketika pengguna menekan tombol simpan. Sistem akan melakukan validasi terhadap seluruh kolom input apakah sudah sesuai atau belum dan jika salah akan menampilkan informasi kesalahannya dibawah kolom input yang tidak sesuai.

### Tipe Notifikasi:

1. Tipe Dialog, saya menggunakan jenis ini untuk menampilkan informasi gagal menyimpan. Sebab, dengan jenis notifikasi ini akan memudahkan pengguna untuk menekan tombol simpan kembali.
2. Tipe Pindah Halaman, saya menggunakan tipe ini pada saat data berhasil disimpan. Sebab, dengan begitu pengguna akan fokus dan mengetahui bahwa data yang tadi diinput telah disimpan tanpa terganggu dengan tampilan lainnya.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
