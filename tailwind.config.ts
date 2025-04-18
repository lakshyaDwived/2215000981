import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      backgroundColor: {
        background: 'hsl(var(--background))',
        card: 'hsl(var(--card))',
        popover: 'hsl(var(--popover))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        muted: 'hsl(var(--muted))',
        accent: 'hsl(var(--accent))',
      },
      textColor: {
        foreground: 'hsl(var(--foreground))',
        'card-foreground': 'hsl(var(--card-foreground))',
        'popover-foreground': 'hsl(var(--popover-foreground))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
      },
      borderColor: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
      },
      colors: {
        analytics: {
          purple: {
            DEFAULT: '#7209B7',
            light: '#9B87F5',
            dark: '#3A0CA3',
          },
          blue: {
            DEFAULT: '#4361EE',
            light: '#4CC9F0',
            dark: '#3A0CA3',
          },
          highlight: {
            DEFAULT: '#F72585',
            soft: '#FF6B6B',
          },
        },
        soft: {
          purple: '#E5DEFF',
          blue: '#D3E4FD',
          pink: '#FFDEE2',
        }
      },
      boxShadow: {
        'elegant': '0 10px 25px -12px rgba(0, 0, 0, 0.1)',
        'hover': '0 15px 30px -12px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'subtle-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'pulse-subtle': 'subtle-pulse 2s infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
