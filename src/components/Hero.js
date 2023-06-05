import './Hero.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button'
import ButtonPrimary from './ButtonPrimary';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
      <Row className='hero' fluid>
        <Col md={5} className='px-5 hero-text h-100'>
          <h1 className='my-5'>Licensed Electricians in Stonington, ME</h1>
          <p>We provide a range of professional electrical services. See below for more information about our company
            and the services we provide.</p>
          <p>Feel free to call with any questions!</p>

          <div className='my-5'>
            <p className='my-1'>Open Monday - Friday: 7:00am - 4:00pm</p>
            <ButtonPrimary href='tel:207-367-5042' className='my-2 btn-lg btn-cta'>Call Us: 207-367-5042</ButtonPrimary>
            {/* <Button href='tel:207-367-5042' type="button" bsStyle="primary" className='my-2 btn-lg btn-cta'>Main Office: 207-367-2715</Button> */}
          </div>
          <p className='p-0 m-0 mb-5'>View our <Link to="/contact">contact page</Link> for office and mailing information</p>
        </Col>
      </Row>
  )
}

export default Hero