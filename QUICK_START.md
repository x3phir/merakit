# ⚡ Quick Start Guide - React Merajut Asa Kita

## 🚀 Installation & Run (5 Minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

Akan membuka: http://localhost:3000

### 3. Stop Server
```
Press Ctrl+C in terminal
```

---

## 📝 Customization Guide

### Update WhatsApp Number

**File**: `src/App.jsx` (line 17)

```jsx
const openWhatsApp = (message = '') => {
  const phoneNumber = '62XXXXXXXXXX'; // 👈 Change this
  // ...
}
```

### Update Contact Information

**File**: `src/constants/index.js`

```javascript
export const CONTACT_INFO = {
  phone: '+62XXXXXXXXXX',          // 👈 WhatsApp number
  email: 'your-email@example.com',  // 👈 Email
  address: 'Your address here',     // 👈 Address
  instagram: 'https://instagram.com/yourprofile', // 👈 Instagram
};
```

### Update Operating Hours

**File**: `src/constants/index.js`

```javascript
export const OPERATING_HOURS = {
  monday: '09:00 - 17:00',
  // ... change as needed
};
```

### Change Colors

**File**: `tailwind.config.js`

```javascript
colors: {
  primary: "#YOUR_COLOR_HEX",          // Orange
  "background-light": "#YOUR_COLOR",   // Light bg
  "background-dark": "#YOUR_COLOR",    // Dark bg
}
```

### Update Tour Packages

**File**: `src/constants/index.js`

```javascript
export const TOUR_PACKAGES = [
  {
    title: 'Package Name',
    price: { amount: 'Rp XXX.XXX', unit: '/ pax' },
    // ... update other fields
  }
]
```

---

## 🎨 Change Content

### Hero Section Text

**File**: `src/components/HeroSection.jsx` (line 40)

```jsx
<h1>Your Title Here</h1>
<p>Your description here</p>
```

### About Section Text

**File**: `src/components/AboutSection.jsx` (line 30)

```jsx
<h2>Your heading</h2>
<p>Your content...</p>
```

### Add New Section

1. Create file: `src/components/NewSection.jsx`

```jsx
import React from 'react';

const NewSection = () => {
  return (
    <section id="new-section" className="py-16 px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Your content here */}
      </div>
    </section>
  );
};

export default NewSection;
```

2. Import in `src/App.jsx`:

```jsx
import NewSection from './components/NewSection';
```

3. Add to App:

```jsx
<NewSection />
```

---

## 📁 Important Files

| File | What to Edit |
|------|-------------|
| `src/App.jsx` | App structure, WhatsApp number |
| `src/constants/index.js` | All text, images, contact info |
| `src/index.css` | Global styles, animations |
| `tailwind.config.js` | Colors, fonts, theme |
| `package.json` | Project name, version |

---

## 🖼️ Update Images

### Hero Video
- Upload to project: `public/hero.mp4`
- Update in `HeroSection.jsx` line 28

### About Images
**File**: `src/components/AboutSection.jsx` (line 16-22)

```jsx
const images = [
  {
    src: 'YOUR_IMAGE_URL',
    alt: 'Image description'
  },
]
```

### Gallery Images
**File**: `src/constants/index.js`

```javascript
export const IMAGES = {
  gallery: [
    { src: 'YOUR_URL', alt: 'Description' },
    // ... add more
  ]
}
```

---

## 🔍 Common Tasks

### Change Site Title
**File**: `public/index.html`

```html
<title>Your New Title</title>
```

### Change Favicon
Add `favicon.ico` to `public/` folder

**File**: `public/index.html`

```html
<link rel="icon" href="favicon.ico" />
```

### Add Meta Description
**File**: `public/index.html`

```html
<meta name="description" content="Your description here" />
```

### Change Font
**File**: `tailwind.config.js`

```javascript
fontFamily: {
  display: ["Your Font", "Fallback", "sans-serif"]
}
```

---

## 🧪 Testing

### Run in Different Sizes
- Open DevTools: `F12`
- Click responsive icon
- Test mobile, tablet, desktop

### Test Dark Mode
**File**: `src/components/Navbar.jsx` - Add toggle button

```jsx
<button onClick={() => {
  document.documentElement.classList.toggle('dark')
}}>
  🌙 Toggle Dark Mode
</button>
```

### Test WhatsApp Links
Click buttons and check WhatsApp opens correctly

---

## 🚀 Build for Production

```bash
npm run build
```

Creates optimized `/build` folder

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Push to GitHub
2. Connect on netlify.com
3. Select repository
4. Deploy! 🎉

### Deploy to GitHub Pages

```bash
npm install gh-pages --save-dev
```

Update `package.json`:

```json
"homepage": "https://yourusername.github.io/repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Run:
```bash
npm run deploy
```

---

## 🐛 Troubleshooting

### Port 3000 already in use?
```bash
npm start -- --port 3001
```

### Components not updating?
- Clear browser cache (`Ctrl+Shift+Delete`)
- Restart dev server

### Styling not working?
- Check tailwind.config.js
- Clear `/node_modules` and reinstall:
  ```bash
  rm -r node_modules
  npm install
  ```

### WhatsApp link not opening?
- Check phone number format (must have +62 prefix)
- Test in incognito mode

---

## 📚 File Cheat Sheet

```
# View all constants
src/constants/index.js

# Edit components
src/components/*.jsx

# Edit styles
src/index.css

# Edit Tailwind config
tailwind.config.js

# Edit package info
package.json
```

---

## ✅ Checklist Before Deploy

- [ ] Update phone number
- [ ] Update email
- [ ] Update Instagram URL
- [ ] Update all images
- [ ] Change site title
- [ ] Update hero text
- [ ] Test all buttons
- [ ] Test responsive design
- [ ] Test dark mode
- [ ] Test WhatsApp links
- [ ] Remove old HTML file (optional)

---

## 📞 Need Help?

1. Check files mentioned in sections above
2. Read `REACT_README.md` for full docs
3. Check `PROJECT_STRUCTURE.md` for architecture
4. Read component comments for inline help

---

## 🎉 Success!

Your React app is ready! Now:

1. ✅ Run: `npm start`
2. ✅ Customize with guide above
3. ✅ Build: `npm run build`
4. ✅ Deploy to production

**Happy coding! 🚀**
