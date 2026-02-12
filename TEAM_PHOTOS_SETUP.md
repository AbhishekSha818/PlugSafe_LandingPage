# 📸 Team Member Photos - Setup Guide

## Overview
The team member photos have been integrated into the Team section. You just need to add the JPEG image files to the `public` folder with the correct naming format.

---

## 🖼️ Photo Requirements

### Image Specifications:
- **Format**: JPEG (.jpeg)
- **Recommended Size**: 300x300px (minimum 200x200px)
- **Location**: `public/` folder
- **Naming Format**: Exact name matching (case-sensitive)

### Required Photo Files:

| Team Member | File Name | Location |
|------------|-----------|----------|
| Arnav Ghosh | `ArnavGhosh.jpeg` | `public/ArnavGhosh.jpeg` |
| Abhishek Sha | `AbhishekSha.jpeg` | `public/AbhishekSha.jpeg` |
| Nabarun Dasgupta | `NabarunDasgupta.jpeg` | `public/NabarunDasgupta.jpeg` |
| Pratima Mishra | `PratimaMishra.jpeg` | `public/PratimaMishra.jpeg` |

---

## 📂 Step-by-Step Instructions

### Step 1: Prepare Your Photos
1. Get high-quality headshot photos for each team member
2. Crop photos to square format (e.g., 300x300px)
3. Export as JPEG format (.jpeg extension)

### Step 2: Rename Photos
Using the exact naming convention:
- `ArnavGhosh.jpeg`
- `AbhishekSha.jpeg`
- `NabarunDasgupta.jpeg`
- `PratimaMishra.jpeg`

**Important**: Names are **case-sensitive**! Keep the exact capitalization.

### Step 3: Add Photos to Public Folder
Place the photos in: `D:\Hardware_LandingPage\plugsafe-landing\public\`

**Folder Structure After Adding:**
```
public/
├── plugsafe-logo.png
├── vite.png
├── ArnavGhosh.jpeg          ← Add this
├── AbhishekSha.jpeg         ← Add this
├── NabarunDasgupta.jpeg     ← Add this
└── PratimaMishra.jpeg       ← Add this
```

### Step 4: Verify in Browser
1. Start dev server: `npm run dev`
2. Go to http://localhost:5173
3. Scroll to "Meet Our Team" section
4. Verify photos appear for each team member

---

## ✅ Verification Checklist

After adding photos, check:

- [ ] All 4 JPEG files are in `public/` folder
- [ ] File names exactly match (case-sensitive):
  - [ ] `ArnavGhosh.jpeg`
  - [ ] `AbhishekSha.jpeg`
  - [ ] `NabarunDasgupta.jpeg`
  - [ ] `PratimaMishra.jpeg`
- [ ] Photos are in JPEG format (not PNG, JPG, etc.)
- [ ] Photos display in team section when running `npm run dev`
- [ ] Social media links work (hover and click):
  - [ ] Arnav: GitHub, LinkedIn, Twitter
  - [ ] Abhishek: GitHub, LinkedIn
  - [ ] Nabarun: No links (skipped)
  - [ ] Pratima: GitHub, LinkedIn

---

## 🔧 Troubleshooting

### Photos Not Showing?

**Problem**: Photos don't appear in team section
**Solution**:
1. Check file names match exactly (case-sensitive)
2. Verify file extension is `.jpeg` (not `.jpg` or `.png`)
3. Confirm files are in `public/` folder
4. Hard refresh browser: `Ctrl+Shift+R`
5. Check browser console (F12) for errors

**File Name Examples** (Must match exactly):
- ✅ `ArnavGhosh.jpeg` (Correct)
- ❌ `arnavghosh.jpeg` (Wrong - lowercase)
- ❌ `Arnav Ghosh.jpeg` (Wrong - space in name)
- ❌ `ArnavGhosh.jpg` (Wrong - extension)

### Social Links Not Working?

**Problem**: Social media icons don't link
**Solution**:
1. Verify links in Team.jsx are correct:
   - GitHub URLs start with `https://github.com/`
   - LinkedIn URLs start with `https://www.linkedin.com/`
   - Twitter handles formatted as `@username`
2. Check internet connection
3. Check links are properly formatted

---

## 📝 Current Team Configuration

### Team Member 1: Arnav Ghosh
```
Role: Lead Engineer
Bio: Full-stack developer specializing in IoT security
Social Links:
  - GitHub: https://github.com/NotoriousArnav
  - LinkedIn: https://www.linkedin.com/in/arnv2004/
  - Twitter: @arnv2004
Photo File: ArnavGhosh.jpeg
```

### Team Member 2: Abhishek Sha
```
Role: Founder of PlugSafe
Bio: Security expert with 5+ years in hardware verification
Social Links:
  - GitHub: https://github.com/AbhishekSha818
  - LinkedIn: https://www.linkedin.com/in/abhishek-sha-ba916a284/
Photo File: AbhishekSha.jpeg
```

### Team Member 3: Nabarun Dasgupta
```
Role: ML Specialist
Bio: AI researcher focused on threat detection systems
Social Links: None provided
Photo File: NabarunDasgupta.jpeg
```

### Team Member 4: Pratima Mishra
```
Role: Product Manager
Bio: Product strategist with background in cybersecurity
Social Links:
  - GitHub: https://github.com/11pratima
  - LinkedIn: https://www.linkedin.com/in/pratima-mishra-34ab0328b/
Photo File: PratimaMishra.jpeg
```

---

## 🚀 Next Steps

1. **Add Photos**:
   - Prepare 4 JPEG photos
   - Name them exactly as specified
   - Place in `public/` folder

2. **Test**:
   - Run `npm run dev`
   - Check Team section displays photos correctly
   - Click social media icons to verify links

3. **Deploy**:
   - Photos will be included in production build
   - They will be served from the public folder
   - No additional configuration needed

---

## 💡 Tips

**Photo Quality Tips**:
- Use professional headshot photos
- Ensure good lighting
- Neutral background recommended
- Show face clearly (no sunglasses/hats)
- Square format works best (300x300px or larger)

**Batch Processing**:
If you have multiple photos to crop and convert:
- Use tools like ImageMagick, GIMP, or online tools
- Batch resize all to 300x300px
- Batch convert to JPEG format
- Batch rename to the correct format

**Online Tools**:
- Bulk image resizer: https://bulk.photo
- Image converter: https://convertio.co
- Batch rename: Use file explorer or CLI tools

---

## 📞 Troubleshooting Help

If photos still don't appear:

1. **Check file path**:
   ```bash
   ls -la public/
   # Should show: ArnavGhosh.jpeg, AbhishekSha.jpeg, etc.
   ```

2. **Check permissions**:
   - Ensure files are readable by the web server
   - On Windows/Mac usually automatic

3. **Clear cache**:
   ```bash
   npm run build
   npm run preview
   ```

4. **Check console errors**:
   - Open DevTools (F12)
   - Check Console tab for 404 errors
   - Look for any broken image warnings

---

## ✨ What Happens After Photos Are Added

Once you add the photos:

1. **Development**: Photos immediately visible when you refresh browser
2. **Build**: Photos included in production build (`npm run build`)
3. **Deployment**: Photos uploaded to your hosting platform automatically
4. **Live Site**: Team section shows professional team photos

---

**Questions? Check the Team.jsx component for implementation details!**

Location: `src/components/Team.jsx` (lines 74-82)
