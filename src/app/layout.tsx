import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import Footer from "~/components/Footer"
import Navbar from "~/components/Navbar"
import TransitionEffect from "~/components/TransitionEffect"
import "~/styles/globals.css"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" })

export const metadata: Metadata = {
  title: "Levy - Home",
  description: "Generated by create next app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}
      >
        <Navbar />
        {children}
        <Footer />
        <TransitionEffect />
      </body>
    </html>
  )
}
