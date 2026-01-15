# 📁 Folder Gambar - Struktur dan Panduan

## Lokasi Folder
```
public/images/
```

## File Gambar yang Dibutuhkan

### About Section (3 gambar)
```
public/images/about-1.jpg    (Aspect ratio 3:4)
public/images/about-2.jpg    (Aspect ratio 4:3)
public/images/about-3.jpg    (Aspect ratio 3:4)
```

### Gallery Section (6 gambar)
```
public/images/gallery-1.jpg  (Workshop Harian)
public/images/gallery-2.jpg  (Colorful yarn)
public/images/gallery-3.jpg  (Komunitas Kami)
public/images/gallery-4.jpg  (Finished product)
public/images/gallery-5.jpg  (Belajar Bersama)
public/images/gallery-6.jpg  (Macrame art)
```

## Cara Menggunakan

### 1. Siapkan Gambar
- Kumpulkan 9 file gambar sesuai daftar di atas
- Format yang didukung: `.jpg`, `.jpeg`, `.png`, `.webp`

### 2. Tempatkan di Folder
- Copy semua gambar ke folder: `public/images/`
- Pastikan nama file sesuai dengan list di atas

### 3. Pastikan Struktur
```
merajut-asa-kita-stitch/
└── public/
    └── images/
        ├── about-1.jpg
        ├── about-2.jpg
        ├── about-3.jpg
        ├── gallery-1.jpg
        ├── gallery-2.jpg
        ├── gallery-3.jpg
        ├── gallery-4.jpg
        ├── gallery-5.jpg
        └── gallery-6.jpg
```

## Ukuran Rekomendasi

### For Web Optimization
```
About Images:
- about-1.jpg:  600px × 800px (3:4 ratio)
- about-2.jpg:  800px × 600px (4:3 ratio)
- about-3.jpg:  600px × 800px (3:4 ratio)

Gallery Images:
- Semua: 600px × 400px (1.5:1 ratio)
```

### File Size
- Target: 100-300 KB per gambar
- Format: Compressed JPEG untuk performa terbaik

## Update Otomatis

Setelah menempatkan file gambar, aplikasi akan otomatis:
- ✅ Memuat gambar dari folder lokal
- ✅ Menampilkan di komponen yang sesuai
- ✅ Menerapkan styling responsif

## Mengganti Gambar

Jika ingin mengganti gambar:
1. Ganti file gambar di folder `public/images/`
2. Pastikan nama file tetap sama
3. Refresh browser (Ctrl + F5)

## Catatan Penting

- ❌ Jangan hapus atau rename folder `public/images/`
- ❌ Jangan ubah nama file gambar (harus sesuai dengan list)
- ✅ Bisa gunakan format `.jpg`, `.png`, atau `.webp`
- ✅ Bisa menambah gambar baru dengan path baru di `src/constants/index.js`

## Jika Gambar Tidak Muncul

1. Buka DevTools (F12)
2. Cek Console untuk error
3. Pastikan file ada di `public/images/`
4. Pastikan nama file sesuai di `src/constants/index.js`
5. Clear cache browser (Ctrl + Shift + Delete)

## Menambah Gambar Baru

1. Copy file gambar ke `public/images/`
2. Update path di `src/constants/index.js`:

```javascript
export const IMAGES = {
    about: {
        img1: '/images/about-1.jpg',
        // ... tambah gambar baru di sini
    }
}
```

3. Gunakan di komponen sesuai kebutuhan

---

**Status**: ✅ Siap untuk menggunakan gambar lokal  
**Folder**: `public/images/`  
**Config**: `src/constants/index.js`
