import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import BackgroundShapes from '@/components/BackgroundShapes'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundShapes />
      <Navigation />
      <Hero />
      <Features />
      <ContactForm />
      <Footer />
    </main>
  )
}