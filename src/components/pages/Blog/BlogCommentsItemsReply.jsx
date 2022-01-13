import React, {useState} from "react";
import defaultImg from "./img/placeholder.png";
import {Link} from "react-router-dom";
import {AppModal} from "../../AppModal";
import PropTypes from 'prop-types';
import {CommentReplyForm} from "../../forms/CommentReplyForm";

const imgStyle = {
  width: 60,
  height: 50
};

export const BlogCommentsItemsReply = ({ img, author, date, content, postId, responseId }) => {
  // Const
  const [show, setShow] = useState(false);
  // Const

  // Functions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Functions

  return (
    <>
      <div className=" mt-3 comment-reply">
        <div className="d-flex">
          <div className="comment-img">
            <img src={img && img || defaultImg} style={imgStyle} alt=""/>
          </div>
          <div className='mx-3'>
            <h5>
              <Link to="#!">{author}</Link>{' '}
              <Link to="#!" className="reply" onClick={handleShow}>
                <i className="fas fa-reply"/> Répondre
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
        <CommentReplyForm postId={postId} responseId={responseId} />
      </AppModal>
    </>
  )
};

BlogCommentsItemsReply.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
  postId: PropTypes.any.isRequired,
};
