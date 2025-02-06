import type { Metadata } from "next"
import "./globals.css"
import { inter } from "./styles/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import Navbar from "@/components/global/navbar/navbar"

export const metadata: Metadata = {
  title: "Univ Calculator",
  description:
    "A simple calculator for university students to calculate their annual and semester GPAs.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body
        style={inter.style}
        className={cn(
          "min-h-screen w-full h-full antialiased",
          inter.className
        )}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex flex-col items-center justify-center">
          {children}
        </main>
        <Toaster position="top-center" richColors theme="light" />
      </body>
    </html>
  )
}
