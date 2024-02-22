import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: 'en' | 'el' }
}) => {
    return (
        <html lang={params.locale}>
            <body className={inter.className}>
                <Navbar />
                <div>
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;

export function generateStaticParams() {
    const locales = ['en', 'el'];
    return locales.map((loc) => ({ locale: loc }));
}

export const generateMetadata = async (
    { params }: { locale: 'en' | 'el' },
) => ({
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
    title: {
        template: '%s | Spiral',
        default: 'Spiral Program - EEA Grants',
    },
    description: 'An EEA Grants project by the 82nd Kindergarten of Athens',
    alternates: {
        canonical:`/${params.locale}`,
        languages: {
            'en': '/en',
            'el': '/el',
        },
    },
    openGraph: {
        title: 'Spiral Program - EEA Grants',
        description: 'An EEA Grants project by the 82nd Kindergarten of Athens',
        url: `/${params.locale}`,
        siteName: 'Spiral',
        locale: params.locale,
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Spiral Program - EEA Grants',
        description: 'An EEA Grants project by the 82nd Kindergarten of Athens',
        siteId: process.env.NEXT_PUBLIC_TWITTER_SITE_ID,
        creator: process.env.NEXT_PUBLIC_TWITTER_CREATOR,
        creatorId: process.env.NEXT_PUBLIC_TWITTER_CREATOR_ID,
        images: ['/hero.jpg'],
    },
});