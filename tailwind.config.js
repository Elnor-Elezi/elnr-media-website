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
        // Premium Accent (Amber/Gold for high conversion)
        brand: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
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
        // Neutral greys for text and borders
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
        'hero-gradient': 'linear-gradient(135deg, #f8fafc 0%, #fffbeb 50%, #f1f5f9 100%)',
        'section-gradient': 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        'dark-gradient': 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.03)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.08)',
        'premium': '0 20px 60px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 30px rgba(245, 158, 11, 0.15)',
        'glow-lg': '0 0 60px rgba(245, 158, 11, 0.25)',
        'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.02)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
