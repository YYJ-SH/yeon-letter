import type { Config } from "tailwindcss";

export default {
 content: [
   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
   extend: {
     colors: {
       background: "var(--background)",
       foreground: "var(--foreground)",
     },
     animation: {
       snowfall: 'snowfall 8s linear infinite',
       'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
       'bounce': 'bounce 1s infinite',
       'aurora': 'aurora 20s linear infinite',
       'aurora-shift': 'aurora-shift 30s linear infinite',
       'twinkle': 'twinkle 3s ease-in-out infinite',
       'falling': 'falling 5s linear infinite',
       'petal-fall': 'petal-fall 10s linear infinite',
       'blink': 'blink 1s step-end infinite',
       'float': 'float 6s ease-in-out infinite',
       'sparkle': 'sparkle 2s ease-in-out infinite',
       'wave': 'wave 3s ease-in-out infinite',
     },
     keyframes: {
       snowfall: {
         '0%': { transform: 'translateY(-10vh)', opacity: '0' },
         '5%': { opacity: '1' },
         '95%': { opacity: '1' },
         '100%': { transform: 'translateY(100vh)', opacity: '0' }
       },
       aurora: {
         '0%': { transform: 'rotate(0deg) scale(1)' },
         '50%': { transform: 'rotate(180deg) scale(1.2)' },
         '100%': { transform: 'rotate(0deg) scale(1)' }
       },
       'aurora-shift': {
         '0%': { transform: 'translateX(0) translateY(0)' },
         '50%': { transform: 'translateX(10%) translateY(5%)' },
         '100%': { transform: 'translateX(0) translateY(0)' }
       },
       twinkle: {
         '0%': { opacity: '0.2', transform: 'scale(0.8)' },
         '50%': { opacity: '1', transform: 'scale(1.2)' },
         '100%': { opacity: '0.2', transform: 'scale(0.8)' }
       },
       falling: {
         '0%': { transform: 'translateY(-10vh) scale(1)', opacity: '0' },
         '10%': { opacity: '0.8' },
         '90%': { opacity: '0.8' },
         '100%': { transform: 'translateY(100vh) scale(0.5)', opacity: '0' }
       },
       'petal-fall': {
         '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '0' },
         '10%': { opacity: '1' },
         '90%': { opacity: '0.8' },
         '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' }
       },
       blink: {
         '0%': { opacity: '1' },
         '50%': { opacity: '0' },
         '100%': { opacity: '1' }
       },
       float: {
         '0%': { transform: 'translateY(0px)' },
         '50%': { transform: 'translateY(-20px)' },
         '100%': { transform: 'translateY(0px)' }
       },
       sparkle: {
         '0%': { transform: 'scale(1)', opacity: '1' },
         '50%': { transform: 'scale(1.5)', opacity: '0.5' },
         '100%': { transform: 'scale(1)', opacity: '1' }
       },
       wave: {
         '0%': { transform: 'rotate(0deg)' },
         '50%': { transform: 'rotate(15deg)' },
         '100%': { transform: 'rotate(0deg)' }
       }
     },
   },
 },
 plugins: [],
} satisfies Config;