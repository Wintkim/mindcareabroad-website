import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { ForYou } from '@/components/ForYou'
import { Services } from '@/components/Services'
import { About } from '@/components/About'
import { Testimonials } from '@/components/Testimonials'
import { Booking } from '@/components/Booking'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ForYou />
        <Services />
        <About />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
