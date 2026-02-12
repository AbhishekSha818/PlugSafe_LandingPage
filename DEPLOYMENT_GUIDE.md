# 🚀 PlugSafe Landing Page - Deployment Guide

## Overview

The PlugSafe landing page is a production-ready React application built with Vite, Tailwind CSS, and React Context. This guide covers deployment to multiple platforms.

---

## ✅ Pre-Deployment Checklist

Before deploying, ensure:

- [x] Build completes successfully: `npm run build`
- [x] No console errors or warnings in browser
- [x] Loading animation works on desktop and mobile
- [x] Sound effects play correctly (user interaction required on some browsers)
- [x] Dark/Light theme toggle works
- [x] All links are functional
- [x] Mobile responsiveness verified

Run the following before deployment:

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` and test all features.

---

## 📋 Build Specifications

```
Framework:       React 18
Build Tool:      Vite 7.3.1
Output:          dist/ folder
Main Sizes:
  - CSS:         ~6 KB (gzip)
  - JS:          ~71.5 KB (gzip)
  - HTML:        ~0.32 KB (gzip)
  
Total Bundle:    ~78 KB (gzip)
Build Time:      ~3-4 seconds
Node Version:    18.x or higher
```

---

## 🌐 Deployment Options

### **Option 1: Vercel (Recommended) ⭐**

Vercel is the creator of Next.js and provides excellent React support. Free tier includes unlimited bandwidth.

#### Steps:

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   cd D:\Hardware_LandingPage\plugsafe-landing
   vercel
   ```

4. **Follow prompts**:
   - Project name: `plugsafe-landing`
   - Framework: Select "Vite"
   - Root: `.`
   - Build command: `npm run build`
   - Output directory: `dist`

5. **Your site is live!**
   - Vercel will provide a URL like `https://plugsafe-landing.vercel.app`
   - Every git push automatically deploys

#### Advanced (Connect to GitHub):

```bash
vercel --prod  # Deploy to production
```

Add `vercel.json` for configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "env": {
    "VITE_API_URL": "@vite_api_url"
  }
}
```

---

### **Option 2: Netlify**

Netlify offers free hosting with Git integration and continuous deployment.

#### Steps:

1. **Install Netlify CLI** (optional):
   ```bash
   npm install -g netlify-cli
   ```

2. **Via CLI** (if installed):
   ```bash
   cd D:\Hardware_LandingPage\plugsafe-landing
   netlify deploy --prod --dir=dist
   ```

3. **Via Web Dashboard**:
   - Go to https://netlify.com
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `dist` folder
   - Your site is live!

4. **Connect Git for Auto-Deployment**:
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Select your repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

#### Netlify Configuration (`netlify.toml`):

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_ENV = "production"
```

---

### **Option 3: GitHub Pages**

Free hosting directly from GitHub repository.

#### Steps:

1. **Add `vite.config.js` base path** (if deploying to subdirectory):
   ```javascript
   export default {
     base: '/plugsafe-landing/',  // if repo is: github.com/username/plugsafe-landing
     // OR
     base: '/',  // if repo is: github.com/username/username.github.io
   }
   ```

2. **Build**:
   ```bash
   npm run build
   ```

3. **Push `dist` to `gh-pages` branch**:
   ```bash
   npm install --save-dev gh-pages
   ```

4. **Add to `package.json`**:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

5. **Deploy**:
   ```bash
   npm run deploy
   ```

6. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`
   - Save

Your site will be live at `https://username.github.io/plugsafe-landing`

---

### **Option 4: AWS Amplify**

AWS Amplify provides hosting with custom domain and SSL.

#### Steps:

1. **Connect GitHub Repository**:
   - Go to https://console.aws.amazon.com/amplify/
   - Click "New App" → "Host web app"
   - Select "GitHub"
   - Authorize and select repository
   - Select main branch

2. **Configure Build Settings**:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Click "Save and deploy"

3. **Add Custom Domain** (optional):
   - Go to Domain management
   - Connect your domain

Your site will be live within 2-3 minutes.

---

### **Option 5: Docker + Nginx**

For production-grade deployment with custom server.

#### `Dockerfile`:

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Serve stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### `nginx.conf`:

```nginx
server {
  listen 80;
  server_name _;
  
  root /usr/share/nginx/html;
  index index.html;
  
  # SPA routing
  location / {
    try_files $uri $uri/ /index.html;
  }
  
  # Cache static assets
  location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }
  
  # No cache for HTML
  location ~* \.(html)$ {
    expires -1;
    add_header Cache-Control "no-cache, no-store, must-revalidate";
  }
}
```

#### Build and Run:

```bash
docker build -t plugsafe-landing .
docker run -p 80:80 plugsafe-landing
```

---

## 📊 Comparison Table

| Platform | Free | Build Time | Speed | Custom Domain | SSL | Best For |
|----------|------|-----------|-------|---------------|-----|----------|
| Vercel | ✅ | Instant | ⚡⚡⚡ | ✅ | ✅ | Production sites |
| Netlify | ✅ | Fast | ⚡⚡⚡ | ✅ | ✅ | Production sites |
| GitHub Pages | ✅ | Manual | ⚡⚡ | ✅ | ✅ | Projects/Portfolio |
| AWS Amplify | ⚠️ | ~2-3 min | ⚡⚡⚡ | ✅ | ✅ | Enterprise |
| Docker | ❌ | N/A | ⚡⚡⚡ | Manual | Manual | Full control |

---

## 🔒 Production Environment Variables

If you add environment variables, create `.env.production`:

```env
VITE_API_URL=https://api.plugsafe.com
VITE_ANALYTICS_ID=your_id_here
```

Access in code:
```javascript
console.log(import.meta.env.VITE_API_URL);
```

---

## 🎯 Post-Deployment Verification

After deploying, verify:

1. **Page loads** - No 404 or server errors
2. **Loading animation** plays on page load
3. **Sound effects** work (may need click/tap to play)
4. **Theme toggle** switches dark/light mode
5. **Navigation links** scroll to sections
6. **Mobile responsiveness** - Test on phone
7. **Performance** - Check Google PageSpeed Insights

### Check Performance:

```bash
npm run build && npm run preview
# Open http://localhost:4173 and test
```

### Lighthouse Audit:

```bash
# In browser DevTools:
# F12 → Lighthouse → Analyze page load
```

---

## 🔄 Continuous Deployment (CD)

### GitHub Actions (Automatic Deploy on Push)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: vercel/action@master
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

Get `VERCEL_TOKEN`:
1. Go to Vercel Settings → Tokens
2. Generate new token
3. Add to GitHub repo secrets

---

## 🚨 Troubleshooting Deployment

### **Build Fails**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### **Styles Not Loading**
- Ensure Tailwind CSS is included in `src/index.css`
- Check `tailwind.config.js` is present
- Rebuild: `npm run build`

### **Sound Not Playing**
- Browser autoplay policy requires user interaction
- Check browser console for errors
- Test locally first: `npm run dev`

### **Theme Not Persisting**
- Enable localStorage in browser
- Check `ThemeContext.jsx` for `localStorage.setItem()`
- Clear browser cache and reload

### **Routes Not Working (SPA)**
- Netlify: Add `_redirects` file to `public/`:
  ```
  /* /index.html 200
  ```
- Vercel: Usually auto-configured for SPA

---

## 📈 Monitoring & Analytics

### Add Google Analytics

1. Create `src/hooks/useGoogleAnalytics.js`:

```javascript
import { useEffect } from 'react';

export function useGoogleAnalytics() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  }, []);
}
```

2. Add to `src/App.jsx`:
```javascript
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics';

function App() {
  useGoogleAnalytics();
  return (...);
}
```

### Add to HTML

In `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🎓 Next Steps

1. Choose your platform (Vercel recommended)
2. Follow deployment steps
3. Test thoroughly in production
4. Set up custom domain (optional)
5. Add analytics for user tracking
6. Monitor performance metrics

---

## 📞 Support

For issues with specific platforms:

- **Vercel**: https://vercel.com/support
- **Netlify**: https://docs.netlify.com
- **GitHub Pages**: https://docs.github.com/en/pages
- **AWS Amplify**: https://docs.amplify.aws

---

**Happy deploying! 🚀**

Your PlugSafe landing page is production-ready!
