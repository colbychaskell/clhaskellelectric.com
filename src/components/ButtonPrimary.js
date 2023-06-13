import Button from 'react-bootstrap/Button';

const ButtonPrimary = ({ children, ...props }) => {
  return (
    <Button {...props}>
      {children}
    </Button>
  )
}

export default ButtonPrimary