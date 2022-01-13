import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {PageTitleSection} from "../../views/sections/PageTitleSection";
import './css/post.css';
import {PostsItem} from "./PostsItem";
import {CtaSection} from "../../views/sections/CtaSection";
import {PartnersSection} from "../../views/sections/PartnersSection";
import RequestAPI from "../../../services/RequestAPI";
import ExtService from "../../../services/ExtService";
import {AppPagination} from "../../AppPagination";
import moment from "moment";
import {PostsLoader} from "../../../loaders/PostsLoader";
import {PostsSideBar} from "./PostsSideBar";

const PostsPage = () => {
  // Const
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  // Const

  // ------------------------------------------------------------------
  // ------------------------------------------------------------------

  // Functions
  const fetchPosts = async () => {
    try {
      const data = await RequestAPI.findAll(
        'posts?order[id]=desc&pagination=false'
      );
      setPosts(data['hydra:member']);
      setLoading(false);
    } catch (e) {
      console.log(e.response);
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  // Functions

  // ------------------------------------------------------------------
  // ------------------------------------------------------------------

  // useEffects
  useEffect(() => { fetchPosts(); }, []);
  // useEffects

  // ------------------------------------------------------------------
  // ------------------------------------------------------------------

  const filteredPosts = posts.filter(
    p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const itemsPerpage = 6;
  const paginatedPosts = AppPagination.getDate(filteredPosts, currentPage, itemsPerpage);

  return (
    <>
      <div id="posts" className="posts mb-5">
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
              <Row>
                {!loading && paginatedPosts.map(post => (
                  <Col md={6} className='mb-4' key={post.id}>
                    <PostsItem
                      content={ExtService.filterStr(post.content, 80)}
                      title={ExtService.filterStr(post.title, 15)}
                      author='Admin'
                      commentLength={post.totalComments}
                      commentLink={`/blog/${post.id}/${post.slug}/comments`}
                      date={moment(post.createdAt).calendar()}
                      postLink={`/blog/${post.id}/${post.slug}`}
                    />
                  </Col>
                ))}

                {loading && <PostsLoader/>}

                {itemsPerpage < filteredPosts.length && <AppPagination
                  currentPage={currentPage}
                  itemsPerPage={itemsPerpage}
                  length={filteredPosts.length}
                  onPageChanged={handlePageChange}
                />}
              </Row>
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

export default PostsPage;
