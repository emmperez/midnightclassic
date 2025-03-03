import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { ReactLenis } from 'lenis/react'


export const metadata = {
  title: "Emmanuel Perez - Frontend Developer",
  description: "Emmanuel Perez is a Frontend Developer based in New Jersey and working globally. Specialized in delivering seamless user experiences.",
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