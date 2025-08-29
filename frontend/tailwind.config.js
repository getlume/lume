/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          50: '#fefbf3',
          100: '#fef7e6',
          200: '#fdedc0',
          300: '#fce299',
          400: '#f9d54d',
          500: '#F4B942',
          600: '#E2AB3A',
          700: '#c79332',
          800: '#a67a2a',
          900: '#876322',
          950: '#4a3612',
          DEFAULT: '#F4B942',
        },
        secondary: {
          50: '#f8fafb',
          100: '#f1f5f7',
          200: '#dfe7eb',
          300: '#c1d4dc',
          400: '#9cb7c4',
          500: '#7a98a8',
          600: '#647d8a',
          700: '#556770',
          800: '#49565d',
          900: '#1E2A33',
          950: '#0f1519',
          DEFAULT: '#1E2A33',
        },
        neutral: {
          50: '#FAF7F2',
          900: '#0A0E12',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'display': '-3px',
      },
      lineHeight: {
        'display': '1.1',
      },
    },
  },
  plugins: [],
}