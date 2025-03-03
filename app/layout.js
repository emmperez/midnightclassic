import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { ReactLenis } from 'lenis/react'


export const metadata = {
  title: "Emmanuel Perez - Frontend Developer",
  description: "Emmanuel Perez is a Frontend Developer based in New Jersey and working globally. Specialized in delivering seamless user experiences.",
  openGraph: {
    title: 'Emmanuel Perez - Frontend Developer',
    description: 'Emmanuel Perez is a Frontend Developer based in New Jersey and working globally. Specialized in delivering seamless user experiences.',
    images: [
      {
        url: '/og-image.jpg', // Ensure this image exists in your public directory
        width: 1200,
        height: 630,
        alt: 'Emmanuel Perez - Frontend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COMPASS® | Navigate Wellness & Growth',
    description: 'Mindfulness, productivity, and self-improvement insights to help you live with clarity and purpose.',
    images: ['/og-image.jpg'],
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