import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import TitledSection from './TitledSection';
import ButtonPrimary from './ButtonPrimary';
import { LinkContainer } from 'react-router-bootstrap';
import Row from 'react-bootstrap/Row';

const About = () => {
  return (
    <TitledSection title='About Us'>
    <Row>
      <Col lg={6} className='mb-4'>
        <p>
          We provide a range of electrical services from small repairs to new constructions, and we
          sell, install, and service generators, heat pumps, solar systems, and EV chargers. Our
          team of licensed electricians is dedicated to providing quality workmanship and excellent
          customer service.
        </p>
        <p>More details on the services we provide are available on our services page.</p>
        <LinkContainer to='/services'>
        <ButtonPrimary className='btn-cta mt-3 mb-5'>View Services</ButtonPrimary>
        </LinkContainer>
        {/* <Button className='btn-cta mt-3 mb-5' bsStyle="primary" >View Services</Button> */}
        <h5>Have a project in mind?</h5>
        <p>Fill out our contact form below or call us directly and we
          will work to get you started as quickly as possible.</p>
      </Col>
      <Col lg={6} className='mb-auto'>
        <h4 className='mb-3'>Billing Information</h4>
        <p>Please mail checks to P.O. Box 43, Stonington, ME 04681. This is our only <u>Mailing Address</u>.</p>
        <p>We may be able to offer credit card or online ACH payments for some projects.
          Please call us to discuss your options.</p>
        <p>We strive to provide detailed billing information for all customer projects. If you
          have a billing question, give us a call any time during business hours and we will do
          our best to make it right!</p>
      </Col>
      </Row>
    </TitledSection>
  )
}

export default About