# PlugSafe Landing Page

A modern, responsive landing page for PlugSafe - a USB device safety verification tool. Built with React, Vite, and Tailwind CSS with full dark/light theme support.

## 🚀 Features

- **Dark/Light Theme Toggle** - Smooth fade transitions between themes
- **Responsive Design** - Mobile-first approach with breakpoints for all devices
- **Smooth Scrolling** - Elegant navigation between sections
- **Modern UI Components** - Features, How It Works, Team, and Call-to-Action sections
- **Performance Optimized** - Built with Vite for fast development and production builds
- **Green Accent Color** (#77f27e) - Custom branding throughout the application

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed navbar with theme toggle and hamburger menu
│   ├── Hero.jsx            # Landing hero section with call-to-action
│   ├── Features.jsx        # Features showcase section
│   ├── HowItWorks.jsx      # Step-by-step process section
│   ├── Team.jsx            # Team members section
│   └── Footer.jsx          # Footer with links and newsletter
├── context/
│   └── ThemeContext.jsx    # Theme provider and hook for dark/light mode
├── App.jsx                 # Main application component
├── App.css                 # Global application styles
├── index.css               # Tailwind CSS imports
└── main.jsx                # Application entry point
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **@tailwindcss/postcss** - PostCSS plugin for Tailwind
- **lucide-react** - Beautiful SVG icon library

## 🎨 Design System

### Colors
- **Primary Green**: `#77f27e` (brand color for highlights and buttons)
- **Dark Mode Background**: `#0f172a` (slate-900)
- **Light Mode Background**: `#ffffff`
- **Dark Mode Text**: `#f1f5f9` (slate-100)
- **Light Mode Text**: `#0f172a` (slate-900)

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📦 Getting Started

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎯 Key Features Explained

### Dark/Light Theme
- Automatic detection of system preference on first visit
- Persistent theme preference using localStorage
- Smooth fade transitions between themes (0.3s)
- Applied using Tailwind's `dark` class

### Responsive Navigation
- **Desktop**: Full navigation visible with theme toggle and "Get Started" button
- **Mobile**: Hamburger menu for navigation links with smooth slide animation
- Fixed navbar stays at the top while scrolling

### Section Navigation
- Click navbar links to smoothly scroll to sections
- Mobile menu closes after navigation
- Smooth scroll behavior for better user experience

### Theme Toggle Button
- Located in navbar next to "Get Started" button
- Shows moon icon in light mode, sun icon in dark mode
- Smooth transitions on click

## 🔧 Customization

### Change Primary Color
Edit `tailwind.config.js`:
```javascript
colors: {
  'primary-green': '#77f27e', // Change this to your desired color
}
```

### Modify Sections
Each section is a separate component in `src/components/`. Simply edit the respective file to customize content.

### Add New Sections
1. Create a new component in `src/components/`
2. Import it in `App.jsx`
3. Add a section ID to enable navigation
4. Add the link to the navbar navigation array

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎬 Animation Details

- **Theme Switch**: Smooth fade (0.3s duration)
- **Hover Effects**: Color transitions and shadow effects
- **Mobile Menu**: Slide and fade animations
- **Scroll Behavior**: Smooth scrolling throughout the app

## 📝 Component Documentation

### Navbar Component
- **Props**: `onNavClick` (function to handle section navigation)
- **Features**: Fixed positioning, responsive hamburger menu, theme toggle

### Hero Component
- **Props**: `onGetStarted` (function for CTA button)
- **Features**: Two-column layout on desktop, stats section, call-to-action buttons

### Features Component
- **Features**: 4-column grid on desktop, hover effects with scaling
- **Customizable**: Easy to modify feature cards and add more

### HowItWorks Component
- **Features**: Step-by-step process with numbered cards and connecting lines
- **Responsive**: Adapts to different screen sizes

### Team Component
- **Features**: Team member cards with social media links
- **Customizable**: Easy to add or remove team members

### Footer Component
- **Features**: Company info, links, newsletter signup, social links

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Update `vite.config.js` with your repository name
2. Run `npm run build`
3. Push the `dist` folder to GitHub Pages

## 📄 License

MIT License - Feel free to use this template for your projects!

## 💡 Tips

1. Use the `useTheme()` hook in any component to access theme state
2. All color transitions are automatic through Tailwind's `transition-colors duration-300`
3. Mobile-first approach means start with mobile styles, then add larger breakpoints
4. Icons come from lucide-react - see their [documentation](https://lucide.dev) for more options

## 🤝 Contributing

Feel free to fork, modify, and improve this landing page template!

---

**Built with ❤️ for PlugSafe**
