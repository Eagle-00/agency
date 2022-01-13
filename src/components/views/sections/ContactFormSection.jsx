import React, {useState} from "react";
import {Card, Col, Row} from "react-bootstrap";
import {Field} from "../../forms/Field";
import {AreaField} from "../../forms/AreaField";

export const ContactFormSection = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContact({...contact, [name]: value});
  };

  const onHandleSubmit = event => {
    event.preventDefault();
  };
  return (
    <Card className='border-0 shadow-lg'>
      <Card.Body>
        <form onSubmit={onHandleSubmit} className='pt-2'>
          <Row>
            <Col md={6} className='mb-3'>
              <Field
                onChange={handleChange}
                value={contact.name}
                placeholder='Votre Nom'
                name='name'
                error={errors.name}
              />
            </Col>
            <Col md={6} className='mb-3'>
              <Field
                onChange={handleChange}
                value={contact.email}
                placeholder='Votre Adresse Email'
                name='email'
                type='email'
                error={errors.email}
              />
            </Col>
            <Col xl={12} className='mb-3'>
              <Field
                onChange={handleChange}
                value={contact.subject}
                placeholder='Sujet'
                name='subject'
                error={errors.subject}
              />
            </Col>
            <Col xl={12} className='mb-3'>
              <AreaField
                onChange={handleChange}
                value={contact.message}
                placeholder='Votre Message'
                name='message'
                error={errors.message}
              />
            </Col>
            <Col xl={12} className='mb-3'>
              <div className="form-group text-center">
                <button type="submit">
                  Envoyer
                </button>
              </div>
            </Col>
          </Row>
        </form>
      </Card.Body>
    </Card>
  )
};
