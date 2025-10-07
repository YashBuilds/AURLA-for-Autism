import { Poppins } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'ARULA for Autism - Ultimate Therapy Solution',
  description: 'A completely home-based treatment to ensure promising results in all areas of development. Trusted by 200+ families worldwide.',
  keywords: 'autism therapy, home-based therapy, ABA therapy, autism treatment, child development',
  authors: [{ name: 'ARULA for Autism' }],
  openGraph: {
    title: 'ARULA for Autism - Ultimate Therapy Solution',
    description: 'Home-based autism therapy trusted by 200+ families worldwide',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}