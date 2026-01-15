# Merajut Asa Kita - React Landing Page

Refactored React version dari Merajut Asa Kita community landing page.

## 📁 Struktur Project

```
src/
├── components/
│   ├── Navbar.jsx              # Navigation bar dengan mobile menu
│   ├── HeroSection.jsx         # Hero section dengan video background
│   ├── AboutSection.jsx        # About us dengan gallery
│   ├── ImpactSection.jsx       # Social impact metrics
│   ├── DigitalGallerySection.jsx # Knit product gallery
│   ├── PackagesSection.jsx     # Tour packages cards
│   ├── GallerySection.jsx      # Activity gallery
│   ├── LocationSection.jsx     # Map dan location info
│   ├── FooterCTA.jsx           # Call-to-action footer
│   └── Footer.jsx              # Footer
├── App.jsx                      # Main app component
├── index.js                     # Entry point
└── index.css                    # Global styles

public/
├── index.html                   # HTML template
└── hero.mp4                     # Hero section video (optional)

tailwind.config.js              # Tailwind CSS configuration
postcss.config.js               # PostCSS configuration
package.json                    # Dependencies
```

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat di browser.

### Build

```bash
npm run build
```

## 🎨 Komponen

### Navbar
- Fixed navbar dengan logo dan navigation items
- Mobile menu dengan hamburger button
- Responsive design

### HeroSection
- Video background dengan fallback image
- Sound toggle button
- Call-to-action buttons

### AboutSection
- About us description
- Gallery grid dengan hover effects

### ImpactSection
- 4 impact metrics dengan icons
- Animated cards dengan float animation

### PackagesSection
- Package cards dengan pricing
- Features list
- WhatsApp booking integration

### GallerySection
- Masonry grid layout
- Hover overlay effects

### LocationSection
- Embedded Google Map
- Contact information
- Operating hours

## 🔧 Technologies

- **React 18.2**
- **Tailwind CSS 3.3**
- **PostCSS**
- **Responsive Design**

## 📝 Customization

### Update Contact Info

Edit `src/components/LocationSection.jsx`:
```jsx
const contactInfo = [
  {
    icon: 'phone',
    title: 'Hubungi Kami',
    content: '+62 XXXXXXXXXX',
    link: 'https://wa.me/62XXXXXXXXXX'
  },
  // ...
]
```

### Update WhatsApp Number

Edit `src/App.jsx`:
```jsx
const openWhatsApp = (message = '') => {
  const phoneNumber = '62XXXXXXXXXX'; // Update nomor
  // ...
}
```

### Change Colors

Edit `tailwind.config.js`:
```js
colors: {
  primary: "#YOUR_COLOR",
  "background-light": "#YOUR_COLOR",
  "background-dark": "#YOUR_COLOR",
}
```

## 📦 Deployment

### Build untuk production
```bash
npm run build
```

### Deploy ke Vercel
```bash
npm install -g vercel
vercel
```

### Deploy ke Netlify
1. Push ke GitHub
2. Connect repository di Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

## 🎯 Features

✅ Fully responsive design  
✅ Dark mode support  
✅ Mobile menu navigation  
✅ Smooth scrolling  
✅ Google Maps integration  
✅ WhatsApp integration  
✅ SEO optimized  
✅ Component-based architecture  

## 📄 License

© 2024 Merajut Asa Kita
