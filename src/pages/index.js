import ContactForm from '@/Component/ContactForm/ContactForm'
import Experties from '@/Component/Experties/Experties'
import Header from '@/Component/Header/Header.jsx'
import HeroSection from '@/Component/HeroSection/HeroSection'
import Portfolio from '@/Component/Portfolio/Portfolio'
import Services from '@/Component/Services/Services'
import ServicesSlides from '@/Component/ServicesSlides/ServicesSlides'
import SkillsTab from '@/Component/SkillsTab/SkillsTab'


export default function Home() {
  return (
    <>


      <Header />
      <HeroSection />
      <ServicesSlides />
      <Services />
      <Portfolio />
      <Experties />

      <ContactForm />



    </>
  )
}
