import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

import ContactForm from '@/app/components/ContactForm';
import Hero from '@/app/components/Hero';
import MapLocation from '@/app/components/MapLocation';
import About from '@/app/components/About';

import TitledSection from '@/app/components/TitledSection';

function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

const Home = () => {
  const officeLocation = {
    address: '76 Oceanville Rd, Stonington, ME 04681',
    lat: 44.180230,
    lng: -68.650520,
  }

  return (
    <>
      <Hero />
      <About />
      <TitledSection title='Contact Us'>
        <div className="flex flex-row justify-between">
          <ContactForm />
          <MapLocation className='p-0 pe-5 d-xl-block d-none' location={officeLocation} />
        </div>
      </TitledSection>
    </>
  )
}

export default Page;
