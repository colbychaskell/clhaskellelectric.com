import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const TitledSection = ({ title, children }) => (
  <Container fluid className='pt-5 px-5'>
    <h1>{title}</h1>
    {/* <Row> */}
        {children}
    {/* </Row> */}
  </Container>
)

export default TitledSection