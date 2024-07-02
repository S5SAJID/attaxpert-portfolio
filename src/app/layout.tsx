import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'

export const metadata: Metadata = {
  title: 'AttaXpert — Atta-ul-Rahman',
  keywords: "AttaXpert, Atta khan, Atta Ul Rahman, Social Media Expert, Digital Marketing, Content Creation, SEO Specialist, Ethical Hacking, Influencer Marketing, Social Media Management, Online Presence, Business Transformation, Customized Strategies",
  description: 'Elevate your online presence with Atta Khan, a seasoned Social Media Expert offering tailored solutions in digital marketing, content creation, SEO, and ethical hacking. Transform your business with innovative strategies and personalized service.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        {/* <div className='fixed loading grid place-content-center z-50 top-0 bottom-0 left-0 right-0 bg-white'>
          <div
            className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-slate-700 rounded-full"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
