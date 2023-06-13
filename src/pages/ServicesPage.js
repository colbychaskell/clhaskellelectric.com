import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import TitledSection from '../components/TitledSection';
import { Link } from 'react-router-dom';
import './ServicesPage.css'

const ServicesPage = () => {
  return (
    <Container fluid className='min-vh-100'>
      <TitledSection title='Our Services'>
        <Row>
          <Col>
            <p>
              We provide a wide range of electrical services to meet your needs.
              From installations to repairs, our team of skilled electricians is here to help.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className='col-lg-5'>
            <h4>Island Service</h4>
            <p>We are happy to provide services to the surrounding islands, including Isle au Haut. We operate our own service boat and we will transport our crew and equipment to the islands as needed.</p>
          </Col>
          <Col className='col-lg-5'>
            <h4>Residential Electrical Installations</h4>
            <p>
              We specialize in residential electrical installations, including wiring, outlets,
              switches, light fixtures, and more. Our experienced electricians ensure that your
              home's electrical system is safe, efficient, and up to code.
            </p>
          </Col>
          <Col className='col-lg-5'>
            <h4>Commercial Electrical Repairs</h4>
            <p>
              Our team is skilled in handling commercial electrical repairs, diagnosing issues,
              and providing effective solutions. Whether it's faulty wiring, circuit breaker problems,
              or lighting malfunctions, we have the expertise to get your business back up and running.
            </p>
          </Col>
          <Col className='col-lg-5'>
            <h4>Electrical Panel Upgrades</h4>
            <p>
              If your electrical panel is outdated or insufficient for your power needs, we can help
              with panel upgrades. We'll assess your electrical demands and recommend the right panel
              upgrade to ensure optimal electrical performance and safety for your home or business.
            </p>
          </Col>
          <Col className='col-lg-5'>
            <h4>Lighting Installations</h4>
            <p>
              Enhance your space with our professional lighting installations. Whether you need
              interior lighting, outdoor lighting, or energy-efficient solutions, we offer a variety
              of options to suit your preferences and budget.
            </p>
          </Col>
          <Col className='col-lg-5'>
            <h4>Generator Sales & Service</h4>
            <p>
              We are an authorized Generac dealer, and we sell, install, and service Generac
              generators. We provide 24-hour emergency service for all generators purchased from us.
            </p><p>
              We also service Onan, Briggs & Stratton, Kohler, and other generator brands.
            </p>
          </Col>
          <Col className='col-lg-5'>
            <h4>And More...</h4>
            <p>
              In addition to the services mentioned here, we offer many more personalized services. <Link to="/contact">Contact us</Link> to
              discuss your specific needs.
            </p>
          </Col>

        </Row>
      </TitledSection>
    </Container>

  );
};

export default ServicesPage;