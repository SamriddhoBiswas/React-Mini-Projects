# React


## ⚛️ React + Vite Setup

```bash
# Create a new React project using Vite
npm create vite@latest my-app -- --template react

# Navigate into the project directory
cd my-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 🎨 Tailwind CSS Setup

```bash
# Install Tailwind CSS and its dependencies
npm install -D tailwindcss postcss autoprefixer

# Generate Tailwind configuration files
npx tailwindcss init -p
```

---

### 🛠️ Configure Tailwind

Edit `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

### 💅 Adding Tailwind to CSS

In `src/index.css`, add the following:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🚀 Run the App

```bash
npm run dev
```

---

## 🧱 Build for Production

```bash
npm run build
```

---

## 👁️ Preview Production Build

```bash
npm run preview
```

---
