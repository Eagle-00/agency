import React, {useState} from "react";
import defaultImg from "./img/placeholder.png";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {AppModal} from "../../AppModal";
import {CommentReplyForm} from "../../forms/CommentReplyForm";

const imgStyle = {
  width: 60,
  height: 50
};

export const BlogCommentsItem = ({ img, author, date, content, post, response }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div id="comment" className="comment">
        <div className="d-flex">
          <div className="comment-img">
            <img src={img && img || defaultImg} style={imgStyle} alt=""/>
          </div>
          <div className='mx-3'>
            <h5>
              <Link to="#!">{author}</Link>{' '}
              <Link to="#!" className="reply" onClick={handleShow}>
                <i className="bi bi-reply-fill"/>{' '}
                <i className='fas fa-reply' /> Répondre
              </Link>
            </h5>
            <time dateTime={date}>{date}</time>
            <div className='text-dark'>{content}</div>
          </div>
        </div>
      </div>

      <AppModal
        show={show}
        onClose={handleClose}
        title='Votre réponse'
        closeLabel='Annuler'
      >
        <CommentReplyForm postId={post} responseId={response} />
      </AppModal>
    </>
  )
};

BlogCommentsItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
  post: PropTypes.any.isRequired,
};
