# 📂 Components Folder

Folder components/ berisi kumpulan komponen yang digunakan dalam aplikasi, dikategorikan berdasarkan tingkat kompleksitas dan fungsinya. Struktur folder ini mengikuti prinsip Atomic Design agar lebih modular dan mudah di-maintain.

## 📌 Struktur Folder

```
components/
 ├── blocks/       # Molekul - Kombinasi beberapa ui components
 ├── layouts/      # Layouts - Template layout untuk berbagai halaman
 ├── sections/     # Organisme - Bagian besar dari halaman, seperti Hero, Footer, dll.
 ├── ui/           # Atoms - Komponen umum yang sering digunakan (Button, dll.)
```

## 📌 Best Practices

- ✅ Gunakan ui/ untuk komponen kecil dan reusable.
- ✅ Simpan komponen yang lebih kompleks di blocks/ atau sections/.
- ✅ Pastikan setiap komponen bersifat modular dan tidak memiliki banyak dependensi.
- ✅ Jangan lupa untuk menambahkan dokumentasi di setiap komponen.
