import Image from 'next/image'
import Link from 'next/link'

// import Button from 'react-bootstrap/Button';
import TitledSection from './TitledSection'
import ButtonPrimary from './ButtonPrimary'

import efficiencyME from '@/public/efficiency-me.png'
import generac from '@/public/generac.png'

import './About.css'

const About = () => {
  return (
    <TitledSection title='About Us'>
      <p>
        We provide a range of residential and commercial electrical services from small repairs to new constructions or additions. We also
        sell, install, and service generators, heat pumps, solar systems, home battery systems, and EV chargers. Our
        team of licensed electricians is dedicated to providing quality workmanship and excellent
        customer service.
      </p>
      <p>We are an authorized Generac Dealer, and we provide 24-hour emergency service for all generators purchased from us. As Efficiency Maine Qualified Partners, we are able to offer exclusive rebates and incentives on energy efficient lighting and appliances
      </p>
      <p>More details on the services we provide are available on our services page.</p>
      <Link href='/services'>
        <ButtonPrimary className='btn-cta mt-3 mb-5'>View Services</ButtonPrimary>
      </Link>
      {/* <Button className='btn-cta mt-3 mb-5' bsStyle="primary" >View Services</Button> */}
      <h5>Have a project in mind?</h5>
      <p>Fill out our contact form below or call us directly and we
        will work to get you started as quickly as possible.</p>
      <div className='mt-5'>
        <Image src={efficiencyME} alt='Efficiency Maine logo' className='logo' />
        <Image src={generac} alt='Generac logo' className='logo' />
      </div>

    </TitledSection>
  )
}

export default About
