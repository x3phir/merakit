# 🧪 TESTING & QA GUIDE

## ✅ Pre-Launch Checklist

### 1️⃣ Development Testing

#### Installation Test
```bash
npm install
# ✅ Should complete without errors
```

#### Start Server Test
```bash
npm start
# ✅ Should open at http://localhost:3000
# ✅ No console errors
```

#### Page Load Test
- [ ] Page loads without errors
- [ ] All images load correctly
- [ ] Animations play smoothly
- [ ] Console shows no errors

---

### 2️⃣ Component Testing

#### Navbar Component
- [ ] Logo displays correctly
- [ ] Navigation links work (scroll to section)
- [ ] "Book Now" button opens WhatsApp
- [ ] Mobile menu hamburger appears on small screens
- [ ] Mobile menu toggles open/close
- [ ] Mobile menu items work correctly
- [ ] Mobile menu closes when clicking link

#### Hero Section
- [ ] Background loads (video or image)
- [ ] "Kenali Komunitas" button scrolls to About
- [ ] "Tonton Profil" button plays video
- [ ] Sound button toggles mute/unmute
- [ ] Text is visible and readable

#### About Section
- [ ] Text content displays
- [ ] 3 images load correctly
- [ ] Images have hover effect
- [ ] Layout responsive on all sizes

#### Impact Section
- [ ] 4 metric cards display
- [ ] Icons animate (float effect)
- [ ] Cards have hover effect
- [ ] Text is readable

#### Packages Section
- [ ] 2 package cards display
- [ ] Pricing shows correctly
- [ ] Features list visible
- [ ] "Reservasi via WhatsApp" buttons work
- [ ] Message includes package name

#### Gallery Section
- [ ] 6 images load correctly
- [ ] Masonry layout looks good
- [ ] Images have hover effect
- [ ] Overlay labels appear on hover

#### Location Section
- [ ] Google Map loads
- [ ] All contact info displays
- [ ] Contact icons show
- [ ] "Kunjungi Kami" button works
- [ ] Operating hours correct

#### Footer
- [ ] Copyright text displays
- [ ] Footer styling correct
- [ ] Links in FooterCTA work

---

### 3️⃣ Functionality Testing

#### Navigation
- [ ] All navigation links scroll smoothly
- [ ] Smooth scroll behavior works
- [ ] URL doesn't change (SPA behavior)

#### WhatsApp Integration
- [ ] "Book Now" opens WhatsApp
- [ ] Phone number correct in message
- [ ] Message text clear and appropriate
- [ ] Works in desktop browser
- [ ] Works on mobile

#### Dark Mode
```javascript
// Test by adding toggle
document.documentElement.classList.toggle('dark')
```
- [ ] Dark mode applies to all elements
- [ ] Text is readable in dark mode
- [ ] Colors are appropriate

#### Forms & Inputs
- [ ] No form validation errors
- [ ] Can interact with all buttons
- [ ] Buttons have hover states

---

### 4️⃣ Responsive Design Testing

#### Mobile (320px - 640px)
- [ ] All content fits without scrolling horizontally
- [ ] Text is readable (16px+ font)
- [ ] Buttons are tappable (44px+ height)
- [ ] Images scale correctly
- [ ] Mobile menu works
- [ ] Navigation is accessible

#### Tablet (640px - 1024px)
- [ ] Layout adapts properly
- [ ] 2-column layouts work
- [ ] Navigation visible without menu
- [ ] Images display nicely

#### Desktop (1024px+)
- [ ] Full layout displays
- [ ] Multi-column layouts work
- [ ] Hover effects work (desktop only)
- [ ] Navigation bar full width

#### Test Devices/Emulators
- [ ] iPhone SE (375px)
- [ ] iPhone 12 (390px)
- [ ] iPad (768px)
- [ ] Desktop 1920px
- [ ] Use DevTools responsive mode

---

### 5️⃣ Performance Testing

#### Load Time
```bash
npm run build
# ✅ Should complete successfully
```
- [ ] Build completes without errors
- [ ] No TypeScript errors
- [ ] No console warnings

#### Image Loading
- [ ] All images load (Google Drive links)
- [ ] Images are optimized
- [ ] No broken image icons

#### Animations
- [ ] Smooth 60 FPS animations
- [ ] No jank/stuttering
- [ ] Animations performant

#### Bundle Size
```bash
npm run build
# Check build folder size
# Target: < 200KB for main bundle
```

---

### 6️⃣ Browser Compatibility

#### Test in Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

#### Expected Behavior
- [ ] All features work in all browsers
- [ ] Styling consistent
- [ ] No layout shifts
- [ ] Maps display in all browsers

---

### 7️⃣ Accessibility Testing

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus indicators visible
- [ ] Enter/Space activates buttons
- [ ] Links focusable

#### Screen Reader (Optional)
- [ ] Page structure semantic
- [ ] Images have alt text
- [ ] Buttons have aria labels
- [ ] Links descriptive

#### Color Contrast
- [ ] Text readable on background
- [ ] WCAG AA standard met
- [ ] Works in high contrast mode

---

### 8️⃣ Content Testing

#### Text Content
- [ ] All text displays correctly
- [ ] No spelling errors
- [ ] No broken links
- [ ] Phone numbers correct

#### Images
- [ ] All images load
- [ ] Image alt text appropriate
- [ ] Image file sizes reasonable

#### Forms
- [ ] "Book Now" → WhatsApp works
- [ ] "Hubungi Kami" → WhatsApp works
- [ ] "Kunjungi Kami" → WhatsApp works
- [ ] Instagram link works

---

### 9️⃣ Data Testing

#### Contact Information
- [ ] Phone number correct
- [ ] Email correct
- [ ] Address correct
- [ ] Operating hours accurate

#### Pricing
- [ ] Package prices correct
- [ ] Currency formatting correct
- [ ] Package descriptions accurate

#### Images
- [ ] All image URLs valid
- [ ] Images load from sources
- [ ] Image quality acceptable

---

### 🔟 Build & Deployment Testing

#### Build Process
```bash
npm run build
```
- [ ] Build succeeds
- [ ] No errors in build output
- [ ] Build directory created
- [ ] All files present

#### Static Deployment
```bash
# Test with local server
npx serve -s build
```
- [ ] Serves from /build correctly
- [ ] All routes work
- [ ] Assets load
- [ ] No 404 errors

#### Production URLs
- [ ] Map URLs work in production
- [ ] Images load from external sources
- [ ] WhatsApp links work
- [ ] All links functional

---

## 🧪 Test Cases

### Test Case 1: First-Time Visitor
```
1. Load homepage
2. Read hero section
3. Click "Kenali Komunitas"
4. Scroll to About
5. Click "Book Now"
6. Verify WhatsApp opens
Result: ✅ All steps work
```

### Test Case 2: Mobile User
```
1. Load on mobile browser
2. Click hamburger menu
3. Click "Packages"
4. Scroll to package
5. Click "Reservasi via WhatsApp"
Result: ✅ Menu works, WhatsApp opens
```

### Test Case 3: Package Inquiry
```
1. Navigate to Packages
2. Select "Basic Knitting Workshop"
3. Click WhatsApp button
4. Verify message includes package name
Result: ✅ Message sent with context
```

### Test Case 4: Location Lookup
```
1. Scroll to Location section
2. View embedded map
3. Check contact information
4. Click "Kunjungi Kami"
Result: ✅ Map loads, WhatsApp opens
```

---

## 📝 Test Execution Log

### Date: _____________

#### Desktop Testing (Chrome)
- Navbar: [ ] Pass [ ] Fail
- Hero: [ ] Pass [ ] Fail
- About: [ ] Pass [ ] Fail
- Impact: [ ] Pass [ ] Fail
- Packages: [ ] Pass [ ] Fail
- Gallery: [ ] Pass [ ] Fail
- Location: [ ] Pass [ ] Fail
- Footer: [ ] Pass [ ] Fail

#### Mobile Testing (Safari)
- Layout: [ ] Pass [ ] Fail
- Navigation: [ ] Pass [ ] Fail
- Touch interactions: [ ] Pass [ ] Fail
- Images: [ ] Pass [ ] Fail
- Scroll performance: [ ] Pass [ ] Fail

#### Notes:
```
_________________________________
_________________________________
_________________________________
```

---

## 🐛 Bug Tracking

### Critical Issues (blocks launch)
- [ ] None found

### High Priority (should fix)
- [ ] None found

### Medium Priority (nice to have)
- [ ] None found

### Low Priority (future)
- [ ] None found

---

## ✅ Final Checklist

- [ ] All tests passed
- [ ] No console errors
- [ ] No console warnings
- [ ] Responsive design verified
- [ ] All links work
- [ ] WhatsApp integration works
- [ ] Images load correctly
- [ ] Performance acceptable
- [ ] Accessibility verified
- [ ] Browser compatibility checked
- [ ] Ready for production deployment

---

## 🚀 Sign-Off

**QA Tester**: ___________________

**Date**: ___________________

**Status**: [ ] APPROVED [ ] NEEDS FIXES

**Notes**: 
```
_________________________________
_________________________________
```

---

**Testing Guide Version**: 1.0  
**Date**: January 14, 2026  
**Status**: Ready for QA
