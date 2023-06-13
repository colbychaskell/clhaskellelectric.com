// import Button from 'react-bootstrap/Button';
import TitledSection from './TitledSection';
import ButtonPrimary from './ButtonPrimary';
import { LinkContainer } from 'react-router-bootstrap';

const About = () => {
  return (
    <TitledSection title='About Us'>
      <p>
        We provide a range of electrical services from small repairs to new constructions, and we
        sell, install, and service generators, heat pumps, solar systems, and EV chargers. Our
        team of licensed electricians is dedicated to providing quality workmanship and excellent
        customer service.
      </p>
      <p>We are an authorized Generac Dealer, and we provide 24-hour emergency service for all generators purchased from us. As Efficiency Maine Qualified Partners, we are able to offer exclusive rebates and incentives on energy efficient lighting and appliances
      </p>
      <p>More details on the services we provide are available on our services page.</p>
      <LinkContainer to='/services'>
        <ButtonPrimary className='btn-cta mt-3 mb-5'>View Services</ButtonPrimary>
      </LinkContainer>
      {/* <Button className='btn-cta mt-3 mb-5' bsStyle="primary" >View Services</Button> */}
      <h5>Have a project in mind?</h5>
      <p>Fill out our contact form below or call us directly and we
        will work to get you started as quickly as possible.</p>
    </TitledSection>
  )
}

export default About