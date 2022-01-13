import React, {useEffect, useState} from "react";
import './css/bolg-comments.css';
import {Card} from "react-bootstrap";
import {CardBody} from "reactstrap";
import {BlogCommentsItem} from "./BlogCommentsItem";
import RequestAPI from "../../../services/RequestAPI";
import {useParams} from "react-router-dom";
import moment from "moment";
import {BlogCommentsItemsReply} from "./BlogCommentsItemsReply";
import {CommentForm} from "../../forms/CommentForm";
import {ThreeDots} from "../../../loaders/ThreeDots";
import {NewsListLoader} from "../../../loaders/NewsListLoader";

const BlogComments = () => {
  // Const
  const [comments, setComments] = useState([]);
  const [countComments, setCountComments] = useState(null);
  const [lengthLoader, setLengthLoader] = useState(true);
  const [postLoader, setPostLoader] = useState(true);
  const { id } = useParams();
  // Const

  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------

  // Functions
  const fetchComments = async () => {
    try {
      const data = await RequestAPI.findAll(`posts/${id}/comments`);
      setComments(data['hydra:member']);
      setLengthLoader(false);
    } catch (e) {
      console.log(e.response);
    }
  };

  const fetchPost = async ( id ) => {
    try {
      const data = await RequestAPI.find('posts', id);
      setCountComments(data.totalComments);
      setPostLoader(false);
    } catch (e) {
      console.log(e.response);
    }
  };
  // Functions

  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------

  // useEffects
  useEffect(() => { fetchComments() }, []);
  useEffect(() => { fetchPost( id ) }, []);
  // useEffects

  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------

  return (
    <>
      <div id='blog-comments' className='blog-comments mt-5'>
        <h3 style={{ fontWeight: 'bold' }}>
          {!lengthLoader && (
            <>
              {countComments} Commentaire(s)
            </>
          )}
          {lengthLoader && <ThreeDots/>}
        </h3>{countComments && <hr/>}
        <div className="comments">
          {!postLoader && comments.map(comment => (
            <div key={comment.id}>
              {!comment.response && (
                <>
                  <BlogCommentsItem
                    author={comment.name}
                    date={moment(comment.createdAt).calendar()}
                    content={comment.content}
                    post={id}
                    response={comment.id}
                  />
                  {comment.comments.map(item => (
                    <BlogCommentsItemsReply
                      key={item.id}
                      content={item.content}
                      author={item.name}
                      date={moment(item.createdAt).calendar()}
                      postId={id}
                      responseId={comment.id}
                    />
                  ))}
                </>
              )}
            </div>
          ))}
          {postLoader && <NewsListLoader/>}
        </div>
      </div>

      <Card className='mt-5 write-comment border-0 shadow-lg pt-2 pb-2'>
        <CardBody>
          <h3 className='mb-2'>Laisser nous un commentaire</h3>
          <p className="text-dark">
            Votre adresse email ne sera pas publiée. Les champs obligatoires commencent
            avec *
          </p>
          <CommentForm postId={ id } />
        </CardBody>
      </Card>
    </>
  )
};

export default BlogComments;
