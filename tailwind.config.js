/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Premium Accent (Teal/Cyan)
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Deep Rich Slate for backgrounds (No pure black)
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617', // Very dark slate, not pure black
        },
        charcoal: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #f8fafc 0%, #f0fdfa 50%, #f1f5f9 100%)',
        'section-gradient': 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        'dark-gradient': 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.03)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.08)',
        'premium': '0 20px 60px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 30px rgba(20, 184, 166, 0.15)',
        'glow-lg': '0 0 60px rgba(20, 184, 166, 0.25)',
        'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.02)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
