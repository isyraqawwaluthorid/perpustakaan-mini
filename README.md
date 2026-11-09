# Perpustakaan Mini — Daftar Buku

Aplikasi web sederhana untuk mengelola data buku, dibuat dengan **Laravel**, **Blade**, dan **Tailwind CSS** mengikuti tutorial *Membangun Website Daftar Buku*.

## Fitur

- Tambah, lihat detail, ubah, dan hapus data buku (CRUD)
- Validasi form dengan pesan error di bawah setiap isian
- Pencarian berdasarkan judul atau penulis
- Pagination 5 buku per halaman
- Data contoh lewat seeder

## Teknologi

| Bagian | Yang dipakai |
| --- | --- |
| Backend | Laravel 13 (PHP 8.3+) |
| Tampilan | Blade + Tailwind CSS 4 |
| Build aset | Vite |
| Database | SQLite |

## Cara Menjalankan

Prasyarat: PHP 8.3+, Composer, dan Node.js.

```bash
git clone https://github.com/isyraqawwaluthorid/perpustakaan-mini.git
cd perpustakaan-mini

composer install
npm install

cp .env.example .env
php artisan key:generate

php -r "file_exists('database/database.sqlite') || touch('database/database.sqlite');"
php artisan migrate --seed
composer run dev
```

Lalu buka **http://127.0.0.1:8000**.

> Di Windows (Command Prompt), ganti `cp` dengan `copy`.

## File yang Dibuat

| File | Isi |
| --- | --- |
| `database/migrations/…_create_bukus_table.php` | Struktur tabel `buku` |
| `app/Models/Buku.php` | Model Buku |
| `app/Http/Controllers/BukuController.php` | Logika CRUD dan pencarian |
| `routes/web.php` | Daftar alamat URL |
| `resources/views/layouts/app.blade.php` | Kerangka halaman (menu, pesan, footer) |
| `resources/views/buku/index.blade.php` | Halaman daftar buku |
| `resources/views/buku/_form.blade.php` | Isian form yang dipakai bersama |
| `resources/views/buku/create.blade.php`, `edit.blade.php`, `show.blade.php` | Halaman tambah, ubah, dan detail |
| `database/seeders/BukuSeeder.php` | Data contoh |
