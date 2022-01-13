import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {CardBody, CardImg, CardTitle} from "reactstrap";
import postImg from "./img/placeholder.png";
import PropTypes from 'prop-types';

const style = {
  width: '100%',
  height: 220
};

export const PostsItem = (
  {
    title,
    author,
    date,
    commentLength,
    commentLink,
    content,
    postLink,
    img,
  }
) => (
  <Card className='border-0 shadow-lg'>
    <Link to={postLink} className='posts-links'>
      <CardImg variant='top' src={img && img || postImg} style={style}/>
    </Link>
    <CardBody>
      <CardTitle>
        <h2>
          <Link to={postLink} className='posts-links'>{title}</Link>
        </h2>
      </CardTitle>
      <article className="entry-meta">
        <ul>
          <li className="d-flex align-items-center text-success">
            <i className="fas fa-user-circle"/> <span className="mx-2">{author}</span>
          </li>
          <li className="d-flex align-items-center">
            <i className="fas fa-clock"/> <span className="mx-2">{date}</span>
          </li>
          <li className="d-flex align-items-center">
            <Link to={commentLink}>
              <i className="fas fa-comments"/>{' '}
              <span className="mx-2">{commentLength}</span>
            </Link>
          </li>
        </ul>
      </article>

      <div className="entry-content">
        <div className='text-dark'>{content}</div>
        <div className="read-more text-end mb-3 mt-3">
          <Link to={postLink}>Voir Plus</Link>
        </div>
      </div>
    </CardBody>
  </Card>
);

PostsItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.any.isRequired,
  commentLength: PropTypes.number.isRequired,
  commentLink: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
  postLink: PropTypes.string.isRequired,
  img: PropTypes.string,
};
