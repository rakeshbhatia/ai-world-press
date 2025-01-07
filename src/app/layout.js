// src/app/layout.js
import './globals.css';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ 
    subsets: ['latin'],
    display: 'swap',
});

/**
 * Metadata configuration for the application
 * This information is used for SEO and browser tab display
 */
export const metadata = {
    title: 'AI World Press',
    description: 'Stay updated with the latest AI news from around the world',
};

/**
 * Root layout component that wraps all pages in the application
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components to be rendered within the layout
 * @returns {React.ReactElement} The root layout structure
 */
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${manrope.className} min-h-screen bg-gray-50`}>
                {children}
            </body>
        </html>
    );
}