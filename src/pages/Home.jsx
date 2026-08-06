import Hero from '../components/Hero/Hero.jsx'
import TrustedBy from '../components/TrustedBy/TrustedBy.jsx'
import Services from '../components/Services/Services.jsx'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs.jsx'
import Process from '../components/Process/Process.jsx'
import Projects from '../components/Projects/Projects.jsx'
import Technologies from '../components/Technologies/Technologies.jsx'
import Stats from '../components/Stats/Stats.jsx'
import Testimonials from '../components/Testimonials/Testimonials.jsx'
import FAQ from '../components/FAQ/FAQ.jsx'
import Contact from '../components/Contact/Contact.jsx'

function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <WhyChooseUs />
      <Process />
      <Projects />
      <Technologies />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}

export default Home
