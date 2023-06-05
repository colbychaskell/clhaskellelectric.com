import ContactForm from "../components/ContactForm";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ContactPage = () => {
  return (
    <Container className="p-5 min-vh-100" fluid>
      <Row>
        <Col md={5} className='mx-auto mt-1 mb-5'>
          <h1>Contact Information</h1>
          <h5 className='mb-4'>Feel free to contact us directly via the information below!</h5>
          {/* table of contact information  */}
          <p><b>Phone:</b> 207-367-2715</p>
          <p><b>Fax:</b> 207-367-2716</p>
          <p><b>Email:</b> <a href="mailto:clhaskell@clhaskellelectric.com" target="_blank" rel="noreferrer">clhaskell@clhaskellelectric.com</a>
          </p>
          <p><b>Mailing Address: </b>P.O. Box 43, Stonington, ME 04681</p>
          <p><b>Physical Address: </b>76 Oceanville Rd, Stonington, ME 04681</p>

        </Col>
        <Col md={5} className='mx-auto mt-1'>
          <h1>Contact Us</h1>
          <ContactForm />
        </Col>

      </Row>
    </Container>
  );
}

export default ContactPage;