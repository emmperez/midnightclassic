import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { ReactLenis } from 'lenis/react'

export const metadata = {
  title: "Emmanuel Perez - Frontend Developer",
  description: "Emmanuel Perez is a Frontend Developer based in New Jersey and working globally. Specialized in delivering seamless user experiences.",
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
    og: '/icons/og-image.png'
  },
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