import { useState } from 'react';

import ButtonPrimary from './ButtonPrimary';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function ContactForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    // TODO: Send form data to backend

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Text className="text-muted">
        This is a secure form. We will never share your information.
      </Form.Text>
      <Form.Group className="mb-2 mt-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <InputGroup hasValidation>
          <Form.Control type="text" placeholder="Enter Name" required />
          <Form.Control.Feedback type="invalid">
            Please enter your name.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group className="my-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <InputGroup hasValidation>
          <Form.Control type="email" placeholder="Enter Email" required />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group className="my-2" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <InputGroup hasValidation>
          <Form.Control type="tel" placeholder="Enter Phone Number" required />
          <Form.Control.Feedback type="invalid">
            Please enter a valid phone number.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group className="my-2" controlId="formBasicTopic">
        <Form.Label>Reason for Contacting</Form.Label>
        <InputGroup hasValidation>
          <Form.Control as="select" defaultValue="Choose..." required>
            <option value="">Choose...</option>
            <option>General Inquiry</option>
            <option>Service Request</option>
            <option>Billing</option>
            <option>Other</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please select a reason for contacting us.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <InputGroup hasValidation>
          <Form.Control as="textarea" rows={6} placeholder="Enter Message" required />
          <Form.Control.Feedback type="invalid">
            Please enter a message.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <ButtonPrimary type="submit">
        Submit
      </ButtonPrimary>
    </Form>
  );
}

export default ContactForm;