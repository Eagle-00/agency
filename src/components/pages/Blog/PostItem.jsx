import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {CardBody, CardImg, CardTitle} from "reactstrap";
import postImg from "./img/placeholder.png";
import PropTypes from 'prop-types';
import {SinglePostsLoader} from "../../../loaders/SinglePostLoader";

const style = {
  width: '100%',
  height: 550
};

export const PostItem = (
  {
    title,
    author,
    date,
    updateDate,
    commentLength,
    commentLink,
    content,
    categories = [],
    img,
    loading = true,
  }
) => (
  <>
    {!loading &&
      <Card className='border-0 shadow-lg'>
      <CardImg variant='top' src={img && img || postImg} style={style}/>
      <CardBody>
        <CardTitle>
          <h2>{title}</h2>
        </CardTitle>
        <div className="entry-meta">
          <ul>
            <li className="d-flex align-items-center text-success">
              <i className="fas fa-user-circle"/> <span className="mx-2">{author}</span>
            </li>
            <li className="d-flex align-items-center">
              <i className="fas fa-clock"/> <span className="mx-2">{date}</span>
            </li>
            {updateDate && (
              <li className="d-flex align-items-center">
                <i className="fas fa-calendar-alt"/> <span className="mx-2">{date}</span>
              </li>
            )}
            <li className="d-flex align-items-center">
              <Link to={commentLink}>
                <i className="fas fa-comments"/>{' '}
                {commentLength} <span className="mx-2">Commentaire(s)</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="entry-content">
          <article className='text-dark mb-4'>{content}</article><hr/>
          <div className='text-secondary mb-3'>
            {categories.map(category => (
              <Link to='#!' key={category.id} className='mx-2'>
                <i className='fas fa-folder-open' /> {category.name}
              </Link>
            ))}
            {categories.length >= 1 && <>|</>}<span className="mx-2"/>
            <Link to='#!'>
              <i className='fas fa-tags' /> App
            </Link>
          </div>
        </div>
      </CardBody>
    </Card>
    }
    {loading && <SinglePostsLoader/>}
  </>
);

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.any.isRequired,
  commentLength: PropTypes.number.isRequired,
  commentLink: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
  img: PropTypes.string,
  updateDate: PropTypes.any,
  categories: PropTypes.array,
};
