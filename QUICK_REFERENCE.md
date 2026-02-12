# PlugSafe Landing Page - Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Start Development Server
```bash
npm run dev
```
Open: http://localhost:5173

### 2. Test Features
- ✅ Loading animation with USB insertion
- ✅ Sound effects (4 different tones)
- ✅ Dark/Light theme toggle
- ✅ Responsive design
- ✅ Skip button

### 3. Deploy
```bash
npm run build
# Then choose: Vercel, Netlify, or GitHub Pages
```

---

## 📱 Key Features

**Loading Animation**
- Server/NAS device with USB insertion
- Realistic slide animation (1.4 seconds)
- Synchronized sound effects
- LED status indicators

**Sound Effects**
- Scanning: Rising beep (400→600Hz)
- Connection: 3 ascending beeps
- Success: Upward sweep with harmonic
- Toggle sound: 🔊/🔇 button

**Theme System**
- Auto-detect system preference
- Manual toggle in navbar
- Smooth fade transitions (0.3s)
- Persistent storage

**Responsive Design**
- Mobile: Optimized layout
- Tablet: Adaptive spacing
- Desktop: Full-width experience

---

## 🎯 Next Steps

1. **Customize Content**
   - Edit components in `src/components/`
   - Update text in Hero, Features, Team sections
   - Modify colors in `tailwind.config.js`

2. **Add Your Domain**
   - Custom domain for deployed site
   - SSL certificate (auto-included with Vercel/Netlify)

3. **Add Analytics**
   - Google Analytics integration
   - See `DEPLOYMENT_GUIDE.md` for examples

4. **Monitor Performance**
   - Lighthouse audit in DevTools
   - Monitor Core Web Vitals

---

## 📚 Full Documentation

- `README.md` - Complete project overview
- `DEPLOYMENT_GUIDE.md` - Deploy to 5+ platforms
- `SOUND_EFFECTS_QUICK_START.md` - Audio customization
- Component source files have inline comments

---

## 🆘 Quick Troubleshooting

**Port 5173 in use?**
```bash
npm run dev -- --port 3000
```

**Sound not playing?**
- Browser requires user interaction
- Check browser console for errors
- Hard refresh: Ctrl+Shift+R

**Build failed?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Theme not persisting?**
- Enable localStorage in browser
- Clear browser cache
- Try incognito window

---

## 🎓 Commands Reference

```bash
npm run dev       # Start development server (hot reload)
npm run build     # Create production build
npm run preview   # Preview production build locally
npm run lint      # Check code quality
```

---

## 💡 Pro Tips

1. **Development**: Use `npm run dev` for instant hot reload
2. **Testing**: Use `npm run preview` to test production build
3. **Deployment**: Choose Vercel for fastest setup
4. **Customization**: Most changes don't require rebuild during dev

---

**Ready to launch? Deploy now! 🚀**

See `DEPLOYMENT_GUIDE.md` for detailed platform-specific instructions.
