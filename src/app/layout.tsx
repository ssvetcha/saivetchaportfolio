import '@/lib/globals.css';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/ui/theme-provider';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://saivetcha.com'),
    title: 'Sai Vetcha',
    description: 'Welcome to my personal portfolio!',
    applicationName: 'Sai Vetcha',
    keywords: ['Sai Vetcha', 'portfolio', 'personal', 'website', 'developer', 'designer', 'engineer', 'software', 'engineer'],
    openGraph: {
        siteName: 'Sai Vetcha',
        title: 'Sai Vetcha',
        description: 'Welcome to my personal portfolio!',
        type: 'website',
        images: ['/opengraph-image.png']
    },
    twitter: {
        card: 'summary_large_image',
        site: '@saivetcha',
        title: 'Sai Vetcha',
        description: 'Welcome to my personal portfolio!',
        images: ['/opengraph-image.png']
    },
    icons: [
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '192x192',
            url: '/favicon/saivetcha192x192.png'
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '512x512',
            url: '/favicon/saivetcha512x512.png'
        },
        {
            rel: 'apple-touch-icon',
            url: '/favicon/saivetcha.png'
        },
        {
            rel: 'icon',
            type: 'image/x-icon',
            url: '/favicon/saivetcha.ico'
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            url: '/favicon/saivetcha16x16.png'
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: '/favicon/saivetcha32x32.png'
        }
    ]
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={spaceGrotesk.className}>
                <Analytics />
                <SpeedInsights />
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
