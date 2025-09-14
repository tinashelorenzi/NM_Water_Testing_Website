/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // Enhanced NM Water Testing Brand Colors
          'royal-blue': {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#4A6EBE', // Main brand color
            600: '#3b5998',
            700: '#334e7a',
            800: '#2d4265',
            900: '#1e2a44',
            950: '#15202f',
          },
          'water-blue': {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#5BA3D4', // Main secondary color
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
            950: '#082f49',
          },
          'charcoal': {
            50: '#f8f9fa',
            100: '#e9ecef',
            200: '#dee2e6',
            300: '#ced4da',
            400: '#adb5bd',
            500: '#6c757d',
            600: '#495057',
            700: '#343a40',
            800: '#2C2C2C', // Main charcoal
            900: '#212529',
            950: '#16181b',
          },
          // Modern accent colors
          'light-blue': '#87CEEB',
          'success-green': '#10b981',
          'warning-amber': '#f59e0b',
          'error-red': '#ef4444',
          'light-gray': '#F8F9FA',
          'medium-gray': '#6C757D',
        },
        fontFamily: {
          'sans': ['Inter', 'system-ui', 'sans-serif'],
          'heading': ['Montserrat', 'system-ui', 'sans-serif'],
        },
        fontSize: {
          'xs': ['0.75rem', { lineHeight: '1rem' }],
          'sm': ['0.875rem', { lineHeight: '1.25rem' }],
          'base': ['1rem', { lineHeight: '1.5rem' }],
          'lg': ['1.125rem', { lineHeight: '1.75rem' }],
          'xl': ['1.25rem', { lineHeight: '1.75rem' }],
          '2xl': ['1.5rem', { lineHeight: '2rem' }],
          '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
          '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
          '5xl': ['3rem', { lineHeight: '1.16' }],
          '6xl': ['3.75rem', { lineHeight: '1.1' }],
          '7xl': ['4.5rem', { lineHeight: '1.05' }],
          '8xl': ['6rem', { lineHeight: '1' }],
          '9xl': ['8rem', { lineHeight: '1' }],
        },
        spacing: {
          '18': '4.5rem',
          '22': '5.5rem',
          '26': '6.5rem',
          '30': '7.5rem',
          '34': '8.5rem',
          '38': '9.5rem',
        },
        animation: {
          'fade-in': 'fadeIn 0.6s ease-in-out',
          'fade-in-up': 'fadeInUp 0.8s ease-out',
          'fade-in-down': 'fadeInDown 0.8s ease-out',
          'slide-up': 'slideUp 0.6s ease-out',
          'slide-in-left': 'slideInLeft 0.6s ease-out',
          'slide-in-right': 'slideInRight 0.6s ease-out',
          'bounce-slow': 'bounce 2s infinite',
          'pulse-slow': 'pulse 3s infinite',
          'float': 'float 3s ease-in-out infinite',
          'glow': 'glow 2s ease-in-out infinite alternate',
          'shimmer': 'shimmer 2.5s linear infinite',
          'scale-up': 'scaleUp 0.3s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          fadeInDown: {
            '0%': { opacity: '0', transform: 'translateY(-30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          slideInLeft: {
            '0%': { transform: 'translateX(-30px)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          slideInRight: {
            '0%': { transform: 'translateX(30px)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          glow: {
            '0%': { boxShadow: '0 0 5px rgba(74, 110, 190, 0.5)' },
            '100%': { boxShadow: '0 0 20px rgba(74, 110, 190, 0.8)' },
          },
          shimmer: {
            '0%': { backgroundPosition: '-200% 0' },
            '100%': { backgroundPosition: '200% 0' },
          },
          scaleUp: {
            '0%': { transform: 'scale(0.95)' },
            '100%': { transform: 'scale(1)' },
          },
        },
        boxShadow: {
          'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
          'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          'hard': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -5px rgba(0, 0, 0, 0.05)',
          'blue': '0 10px 40px -10px rgba(74, 110, 190, 0.25)',
          'water-blue': '0 10px 40px -10px rgba(91, 163, 212, 0.25)',
          'inset-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        },
        backdropBlur: {
          xs: '2px',
          '3xl': '64px',
        },
        borderRadius: {
          '4xl': '2rem',
          '5xl': '2.5rem',
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'gradient-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
        },
        transitionTimingFunction: {
          'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          'ease-out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          'ease-in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        },
      },
    },
    plugins: [],
  }