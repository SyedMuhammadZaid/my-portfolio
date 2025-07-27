import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "S.M.Zaid - Full Stack Developer",
  description:
    "Personal portfolio of Syed Muhammad Zaid, a full stack developer specializing in React, Next.js, and modern web technologies.",
  keywords: "full stack developer, react, next.js, web development, portfolio",
  authors: [{ name: "Syed Muhammad Zaid" }],
  openGraph: {
    title: "Syed Muhammad Zaid - Full Stack Developer",
    description: "Personal portfolio showcasing my work and skills in web development",
    type: "website",
  },
  icons: ''
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
