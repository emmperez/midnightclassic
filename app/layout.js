import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { ReactLenis } from 'lenis/react'

export const metadata = {
  title: "Emmanuel Perez - Frontend Developer",
  description: "Emmanuel Perez is a Frontend Developer based in New Jersey and working globally. Specialized in delivering seamless user experiences.",
  icons: {
    icon: 'https://emmanueleperez.com/favicon.ico',
    apple: 'https://emmanueleperez.com/icons/apple-touch-icon.png',    
  },
  openGraph: {
    title: 'Emmanuel Perez - Frontend Developer',
    description: 'Emmanuel Perez is a Frontend Developer based in New Jersey and working globally. Specialized in delivering seamless user experiences.',
    siteName: 'Emmanuel Perez - Frontend Developer',
    images: [
      {
        url: 'https://emmanueleperez.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Emmanuel Perez - Frontend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <ReactLenis root>
      <html lang="en">
        <body className="custom-font">
          {children}
          <Analytics />
        </body>
      </html>
    </ReactLenis>
  );
}