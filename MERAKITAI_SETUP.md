# MerakitAI Chatbot - Setup Guide 🧵

MerakitAI adalah AI Chatbot yang dirancang khusus untuk memberikan informasi tentang Merajut Asa Kita dengan pengetahuan mendalam tentang paket tour, workshop, dan fasilitas.

## 🚀 Quick Start

### 1. Dapatkan Gemini API Key

1. Buka [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Klik "Get API Key"
3. Pilih "Create API key in new Google Cloud project" atau gunakan project yang sudah ada
4. Copy API Key yang sudah dibuat

### 2. Konfigurasi Environment Variable

#### Cara 1: Membuat `.env` file (Recommended)
```bash
# Di root folder project
# Buat file bernama `.env`
```

Tambahkan ke file `.env`:
```
REACT_APP_GEMINI_API_KEY=your_actual_gemini_api_key_here
```

**Contoh:**
```
REACT_APP_GEMINI_API_KEY=AIzaSyA1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q
```

#### Cara 2: Hardcode di Component (Tidak Recommended untuk Production)
Edit `src/components/MerakitAIChatbot.jsx` line ~30:
```javascript
const apiKey = 'your_actual_api_key_here'; // ⚠️ Jangan hardcode di production!
```

### 3. Jalankan Development Server
```bash
npm start
```

### 4. Testing
- Buka aplikasi di browser
- Klik ikon chat di kanan bawah
- Mulai chat dengan MerakitAI!

---

## 📋 Fitur MerakitAI

### ✅ Sudah Diimplementasikan:
- ✨ Animated chat interface dengan Framer Motion
- 🤖 Integrasi Gemini AI API
- 📱 Responsive design (mobile & desktop)
- 💬 Real-time chat dengan typing indicator
- 🌙 Dark mode support
- 📝 Timestamp untuk setiap pesan
- 🎯 System prompt spesifik tentang Merajut Asa Kita

### 🎓 Knowledge Base:
MerakitAI sudah dilatih dengan informasi tentang:
- **Tentang Merajut Asa Kita** - Visi & misi
- **4 Paket Tour** - Merakit, Live-In, Sekolah, Walking Tour
- **Fasilitas** - Guide, Coach, Workshop, Merchandise, Certificate
- **Layanan** - Homestay, Atraksi budaya, Pelatihan profesional

---

## 🔧 Troubleshooting

### Error: "Gemini API Key tidak dikonfigurasi"
**Solusi:**
1. Pastikan file `.env` sudah dibuat di root folder
2. Pastikan key sudah benar (copy dari Google AI Studio)
3. Restart development server (`npm start`)
4. Hard refresh browser (Ctrl + Shift + R atau Cmd + Shift + R)

### Error: "API quota exceeded"
**Solusi:**
- Google Generative AI memiliki rate limit gratis
- Tunggu beberapa menit sebelum mencoba lagi
- Untuk production, upgrade ke plan berbayar

### Chatbot Tidak Merespons
**Solusi:**
1. Buka DevTools (F12) → Console
2. Lihat error message yang muncul
3. Pastikan internet connection aktif
4. Pastikan API Key valid

### `.env` file tidak terdeteksi
**Solusi:**
1. Pastikan file bernama `.env` (bukan `.env.txt` atau nama lain)
2. Pastikan di root folder project (bukan di dalam folder lain)
3. Restart `npm start`

---

## 🛡️ Security Tips

### ⚠️ PENTING: Jangan expose API Key!
- ❌ Jangan commit `.env` ke GitHub
- ❌ Jangan hardcode API key di production code
- ❌ Jangan share API key dengan orang lain

### ✅ Best Practices:
1. Tambahkan `.env` ke `.gitignore`:
```
# .gitignore
.env
.env.local
.env.*.local
```

2. Gunakan `.env.example` sebagai template:
```bash
# Untuk development team, share .env.example
# Mereka akan copy dan isi sendiri dengan API key mereka
```

3. Untuk Production:
- Gunakan environment variables di deployment platform (Vercel, Netlify, dll)
- Jangan pernah hardcode secret keys

---

## 📚 Dokumentasi Lengkap

### Structure File:
```
src/components/
├── MerakitAIChatbot.jsx     ← Component utama AI Chatbot
├── App.jsx                  ← Main component
└── ...
.env                         ← Environment variables (create manually)
.env.example                 ← Template .env
```

### Component Props:
MerakitAIChatbot tidak memerlukan props. Cukup import dan gunakan:
```jsx
import MerakitAIChatbot from './components/MerakitAIChatbot';

<MerakitAIChatbot />
```

### API Integration:
```javascript
// Menggunakan Google Generative AI library
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
```

---

## 🎨 Customization

### Mengubah System Prompt:
Edit `src/components/MerakitAIChatbot.jsx` line ~65 (`systemPrompt`):
```javascript
const systemPrompt = `Anda adalah MerakitAI, asisten khusus untuk...`;
```

### Mengubah Warna & Style:
- Primary color: Edit di `tailwind.config.js` (primary: #f2590d)
- Chat bubble colors: Edit class di component
- Font: Sudah menggunakan font 'display' dari config

### Mengubah Model AI:
```javascript
// Line ~103, ubah model name
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
// Pilihan: 'gemini-pro', 'gemini-pro-vision', etc
```

---

## 🚀 Deploy ke Production

### Vercel (Recommended):
1. Push ke GitHub
2. Import project di Vercel
3. Tambah environment variable `REACT_APP_GEMINI_API_KEY`
4. Deploy!

### Netlify:
1. Push ke GitHub
2. Connect di Netlify
3. Build settings: `npm run build`
4. Tambah environment variable di Netlify dashboard
5. Deploy!

---

## 📞 Support

Jika ada pertanyaan atau error:
1. Cek console browser (F12)
2. Baca dokumentasi Google Generative AI
3. Lihat .env configuration
4. Verifikasi API Key valid

---

## 📝 Notes

- Rate limit gratis: ~60 requests/minute
- Setiap pesan adalah request baru
- Chat history disimpan dalam state React (akan reset saat reload)
- Untuk persistent chat, butuh database tambahan

## 🔄 Updates & Improvements

Potensi improvement di masa depan:
- [ ] Persistent chat history (LocalStorage/Database)
- [ ] Typing indicator improvement
- [ ] Multi-language support
- [ ] Chat export feature
- [ ] Suggestion pills/quick replies
- [ ] Rating system untuk responses

---

**Created:** 2026-01-15  
**Last Updated:** 2026-01-15  
**Status:** ✅ Production Ready
