import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                night: '#0b0f19',
                primary: '#7c5cff',
                accent: '#22d3ee',
                muted: '#9aa4b2',
            },
            fontFamily: {
                display: ['var(--font-space-grotesk)', 'Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
                mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
            },
            boxShadow: {
                glow: '0 0 0 2px rgba(124,92,255,0.2), 0 0 40px rgba(124,92,255,0.25)',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '200% 0' },
                    '100%': { backgroundPosition: '-200% 0' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-2deg)' },
                    '50%': { transform: 'rotate(2deg)' },
                },
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                shimmer: 'shimmer 8s linear infinite',
                wiggle: 'wiggle 1.2s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};

export default config;


