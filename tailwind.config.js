/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    primary: '#000000',
                    secondary: '#1d1d1f',
                    tertiary: '#2d2d2f',
                },
                text: {
                    primary: '#f5f5f7',
                    secondary: '#86868b',
                },
                accent: {
                    DEFAULT: '#2997ff', // Apple Blue
                    hover: '#0077ed',
                },
                border: '#424245',
                success: '#30d158',
                error: '#ff453a',
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
                mono: ['SF Mono', 'Fira Code', 'monospace'],
            },
            boxShadow: {
                'glow': '0 0 20px rgba(255, 255, 255, 0.3)',
            },
            backdropBlur: {
                xs: '2px',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
