import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {Field} from "./Field";
import {AreaField} from "./AreaField";
import RequestAPI from "../../services/RequestAPI";
import PropTypes from 'prop-types';
import  { toast } from "react-toastify";

export const CommentReplyForm = ({ postId, responseId }) => {
  // Const
  const [comment, setComment] = useState({
    name: '', email: '', website: '', content: '', post: '', response: ''
  });
  const [errors, setErrors] = useState({
    name: '', email: '', website: '', content: ''
  });
  // Const

  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------

  // Functions
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setComment({...comment, [name]: value});
  };

  const handleSubmit = async ( event ) => {
    event.preventDefault();
    try {
      await RequestAPI.postData(
        'comments',
        {...comment, post: `/api/posts/${postId}`, response: `/api/comments/${responseId}`}
      );
      setComment({name: '', email: '', website: '', content: '', post: ''});
      setErrors({});
      toast.success("Le commentaire a bien été publié");
    } catch ({ response }) {
      const { violations } = response.data;
      if (violations) {
        const apiErrors = {};
        violations.forEach(({ propertyPath, message}) => {
          apiErrors[propertyPath] = message;
        });
        setErrors(apiErrors);
        toast.warning("Erreur lors de l'envoi du message, veuillez réessayer plus tard");
      }
    }
  };
  // Functions

  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col md={6} className='mb-3'>
          <Field
            name='name'
            value={comment.name}
            onChange={handleChange}
            placeholder='* Votre Nom'
            error={errors.name}
          />
        </Col>
        <Col md={6} className='mb-3'>
          <Field
            name='email'
            value={comment.email}
            onChange={handleChange}
            placeholder='Votre Adresse Email'
            error={errors.email}
          />
        </Col>
        <Col xl={12} className='mb-3'>
          <Field
            name='website'
            value={comment.website}
            onChange={handleChange}
            placeholder='Site web'
            error={errors.website}
          />
        </Col>
        <Col xl={12} className='mb-3'>
          <AreaField
            name='content'
            value={comment.content}
            onChange={handleChange}
            placeholder='* Votre Message'
            error={errors.content}
          />
        </Col>
        <Col xl={12} className='mb-3 text-center mt-3'>
          <input
            type='submit'
            value='Laisser un commentaire'
            className='btn btn-dark p-3'
          />
        </Col>
      </Row>
    </form>
  )
};

CommentReplyForm.propTypes = {
  postId: PropTypes.any.isRequired,
  responseId: PropTypes.any.isRequired,
};
