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
      fontFamily: {
        proxima: ['"Proxima Nova"', 'system-ui', 'sans-serif'],
        sans: ['"Proxima Nova"', 'system-ui', 'sans-serif'],
        display: ['"Montserrat"', 'system-ui', 'sans-serif'],
        neue:['Neue Haas Grotesk Display Pro', 'sans-serif'],
      },
      colors: {
        'Futran_Verdant': '#03C04A',
        'Futran_StoneGray': '#414042',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      addUtilities({
        '.border-gradient': {
          border: '1px solid transparent',
          backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(90deg, #03C04A 0%, #50C9F0 100%)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        },
       '.border-gradient2': {
          '--bg-color': '#DEEFF5',
          border: '1px solid transparent',
          backgroundImage: 'linear-gradient(var(--bg-color), var(--bg-color)), linear-gradient(90deg, #03C04A 0%, #50C9F0 100%)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        },
         '.border-gradient-bg': {
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: '0px',
          right: '0px',
          border: '1px solid transparent',
          backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(90deg, #03C04A 0%, #50C9F0 100%)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
          mask: 'linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box exclude, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)',
          borderRadius: '10px',
        },
        '.border-gradient-1': {
          border: '1px solid transparent',
          backgroundImage: 'radial-gradient(128.94% 244.4% at 9.09% -191.93%, #50C9F0 62.74%, rgba(28, 53, 98, 0) 100%)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        },
      });
    },
  ],
} satisfies Config;