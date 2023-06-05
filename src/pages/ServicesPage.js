import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TitledSection from '../components/TitledSection';

const ServicesPage = () => {
  return (
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
          <Col>
            <h2>Residential Electrical Installations</h2>
            <p>
              We specialize in residential electrical installations, including wiring, outlets,
              switches, light fixtures, and more. Our experienced electricians ensure that your
              home's electrical system is safe, efficient, and up to code.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Commercial Electrical Repairs</h2>
            <p>
              Our team is skilled in handling commercial electrical repairs, diagnosing issues,
              and providing effective solutions. Whether it's faulty wiring, circuit breaker problems,
              or lighting malfunctions, we have the expertise to get your business back up and running.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Electrical Panel Upgrades</h2>
            <p>
              If your electrical panel is outdated or insufficient for your power needs, we can help
              with panel upgrades. We'll assess your electrical demands and recommend the right panel
              upgrade to ensure optimal electrical performance and safety for your home or business.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Lighting Installations</h2>
            <p>
              Enhance your space with our professional lighting installations. Whether you need
              interior lighting, outdoor lighting, or energy-efficient solutions, we offer a variety
              of options to suit your preferences and budget.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>And More...</h2>
            <p>
              In addition to the services mentioned above, we also provide electrical troubleshooting,
              appliance installations, surge protection, and other electrical solutions. Contact us to
              discuss your specific needs.
            </p>
          </Col>
        </Row>
      </TitledSection>
  );
};

export default ServicesPage;