import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/global/ThemeProvider'
import { Navbar } from '@/components/global/Navbar'
import { Footer } from '@/components/global/Footer'
import GrainOverlay from '@/components/global/GrainOverlay'
import FloatingOrb from '@/components/global/FloatingOrb'
import SmoothScroll from '@/components/global/SmoothScroll'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Muhammad Absar Siddiqui | Software Engineer',
  description: 'Software Engineer building AI-powered applications that turn unstructured human input into structured intelligence.',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Muhammad Absar Siddiqui | Software Engineer',
    description: 'Building AI systems that turn unstructured input into structured intelligence.',
    images: ['/images/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-body bg-background text-foreground antialiased min-h-screen flex flex-col pt-16`}>
        <ThemeProvider>
          <SmoothScroll>
            <GrainOverlay />
            <FloatingOrb />
            <Navbar />
            <main className="grow">{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}


