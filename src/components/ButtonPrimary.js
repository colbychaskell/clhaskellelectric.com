import Button from 'react-bootstrap/Button';
import './ButtonPrimary.css'

const ButtonPrimary = ({ children, ...props }) => {
  return (
    <Button className='btn-primary' {...props}>
      {children}
    </Button>
  )
}

export default ButtonPrimary