import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {PageTitleSection} from "../../views/sections/PageTitleSection";
import './css/post.css';
import {CtaSection} from "../../views/sections/CtaSection";
import {PartnersSection} from "../../views/sections/PartnersSection";
import {PostItem} from "./PostItem";
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import RequestAPI from "../../../services/RequestAPI";
import moment from "moment";
import {PostsSideBar} from "./PostsSideBar";

const SinglePost = () => {
  // Const
  const [comment, setComment] = useState({
    categories: [],
    title: '',
    content: '',
    createdAt: '',
    updatedAt: '',
    totalComments: 0
  });
  const { id, slug } = useParams();
  const [loader, setLoader] = useState(true);
  // Const

  // -----------------------------------------------------------------------------
  // -----------------------------------------------------------------------------

  // Functions
  const fetchComment = async ( id ) => {
    try {
      const {
        categories,
        title,
        content,
        createdAt,
        updatedAt,
        totalComments
      } = await RequestAPI.find('posts', id);
      setComment({ categories, title, content, createdAt, updatedAt, totalComments });
      setLoader(false);
    } catch (e) {
      console.log(e.response);
    }
  };
  // Functions

  // -----------------------------------------------------------------------------
  // -----------------------------------------------------------------------------

  // useEffects
  useEffect(() => { fetchComment( id )}, []);
  // useEffects

  // -----------------------------------------------------------------------------
  // -----------------------------------------------------------------------------

  return (
    <>
      <div id="single-post" className="single-post mb-5">
        <Container>
          <PageTitleSection title='Blog'>
            <p className='text-dark' style={{ fontWeight: 'bold' }}>
              Est dolorum ut non facere possimus quibusdam eligendi voluptatem.
              Quia id aut similique quia voluptas sit quaerat debitis.
              Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.
            </p>
          </PageTitleSection><hr/>

          <Row className='mt-5'>
            <Col md={8}>
              <PostItem
                loading={loader}
                content={comment.content}
                commentLength={comment.totalComments}
                title={comment.title}
                author='Admin'
                commentLink={`/blog/${id}/${slug}/comments`}
                date={moment(comment.createdAt).calendar()}
                updatedAte={moment(comment.updatedAt).calendar()}
                categories={comment.categories}
              />
              <Outlet/>
            </Col>

            <Col md={4}>
              <PostsSideBar/>
            </Col>
          </Row>
        </Container>
      </div>

      <CtaSection/>
      <PartnersSection/>
    </>
  )
};

export default SinglePost;
