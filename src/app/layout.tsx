import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
    title: 'Sadikh | Machine Learning Engineer',
    description: 'Portfolio of Sadikh — Machine Learning Engineer building agentic systems, ML research, and delightful AI products.',
    keywords: ['Sadikh', 'Machine Learning Engineer', 'AI', 'LangGraph', 'LangChain', 'LLM', 'Portfolio'],
    openGraph: {
        title: 'Sadikh | Machine Learning Engineer',
        description: 'Building agentic systems, ML research, and delightful AI products.',
        url: 'https://your-domain.com',
        siteName: 'Sadikh',
        locale: 'en_US',
        type: 'website',
    },
    metadataBase: new URL('https://your-domain.com'),
};

const inter = Inter({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={spaceGrotesk.variable}>
            <body className={inter.className}>{children}</body>
        </html>
    );
}


