# PlugSafe Landing Page - Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd plugsafe-landing
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser. The page will auto-reload as you make changes.

### Step 3: Start Building!
Edit files in `src/` and see changes instantly.

---

## 📦 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview the production build locally |

---

## 🎨 What's Included

### Components
- ✅ **Navbar** - Fixed navigation with dark/light toggle and hamburger menu
- ✅ **Hero** - Eye-catching landing section with CTA buttons
- ✅ **Features** - 4 feature cards with icons and descriptions
- ✅ **How It Works** - 4-step process with numbered cards
- ✅ **Team** - Team member cards with social links
- ✅ **Get Started Section** - Final CTA section
- ✅ **Footer** - Company info, links, and newsletter

### Features
- ✅ Dark/Light theme with smooth fade transitions
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll navigation between sections
- ✅ Mobile hamburger menu
- ✅ Custom green accent color (#77f27e)
- ✅ Production-ready build optimization

---

## 🎯 Customization Guide

### Change Your Brand Color
Edit `tailwind.config.js`:
```javascript
colors: {
  'primary-green': '#77f27e', // ← Change this color
}
```

### Update Navbar Links
Edit `src/components/Navbar.jsx`, line 10-15:
```javascript
const navLinks = [
  { label: 'Features', id: 'features' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Team', id: 'team' },
  // Add more links here
];
```

### Modify Hero Section
Edit `src/components/Hero.jsx` to change:
- Headline and description
- Button text and actions
- Statistics

### Update Features
Edit `src/components/Features.jsx` to:
- Add/remove features
- Change icons (see lucide-react icons)
- Update descriptions

### Customize Team
Edit `src/components/Team.jsx` to:
- Add/remove team members
- Change roles and bios
- Update social media links

### Add New Sections
1. Create `src/components/NewSection.jsx`
2. Import in `src/App.jsx`
3. Add section ID for navigation
4. Add to navbar links

---

## 🌙 Theme System Explained

The theme system uses React Context for global state management:

1. **ThemeContext** (`src/context/ThemeContext.jsx`) - Manages theme state
2. **ThemeProvider** - Wraps the app and provides theme to all components
3. **useTheme Hook** - Access theme in any component

### Using Theme in Components
```javascript
import { useTheme } from '../context/ThemeContext';

function MyComponent() {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <div>
      Current theme: {isDark ? 'Dark' : 'Light'}
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
```

### Tailwind Dark Mode
All text and background changes use Tailwind's dark mode classes:
```jsx
<div className="bg-white dark:bg-slate-900">
  <p className="text-slate-900 dark:text-white">Text</p>
</div>
```

---

## 📱 Responsive Design

The design is mobile-first with three breakpoints:

- **Mobile**: < 768px (default)
- **Tablet**: `md:` 768px - 1024px
- **Desktop**: `lg:` > 1024px

Example:
```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-4">
  {/* 1 column on mobile, 2 on tablet, 4 on desktop */}
</div>
```

---

## 🎬 Animation Features

All animations use Tailwind transitions:

### Theme Transition (0.3s)
```jsx
className="transition-colors duration-300"
```

### Hover Effects
```jsx
className="hover:bg-primary-green hover:shadow-lg hover:shadow-primary-green/50 transition-all duration-300"
```

### Scroll Behavior
HTML automatically enables smooth scrolling via:
```css
html {
  scroll-behavior: smooth;
}
```

---

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```
2. Build and push `dist/` to `gh-pages` branch

---

## 💾 Project Structure

```
plugsafe-landing/
├── src/
│   ├── components/       # All React components
│   ├── context/          # Theme context provider
│   ├── App.jsx           # Main app component
│   ├── App.css           # Global styles
│   ├── index.css         # Tailwind imports
│   └── main.jsx          # Entry point
├── public/               # Static assets
├── index.html            # HTML template
├── tailwind.config.js    # Tailwind config
├── postcss.config.js     # PostCSS config
├── vite.config.js        # Vite config
├── package.json          # Dependencies
└── README.md             # Full documentation
```

---

## ❓ Troubleshooting

### Port 5173 already in use
```bash
npm run dev -- --port 3000
```

### Tailwind styles not appearing
Make sure `index.css` has Tailwind imports:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Theme not persisting
Check that localStorage is enabled in your browser.

---

## 📚 Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [MDN Web Docs](https://developer.mozilla.org)

---

## 🎉 You're All Set!

Your PlugSafe landing page is ready to go. Happy coding! 🚀

Need help? Check the `README.md` for detailed documentation.
