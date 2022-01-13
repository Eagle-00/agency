import React, {useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import {CardBody} from "reactstrap";
import {FieldWithIcon} from "../../forms/FieldWithIcon";
import './css/post.css';
import postImg from './img/placeholder.png';
import RequestAPI from "../../../services/RequestAPI";
import {ThreeDots} from "../../../loaders/ThreeDots";

export const PostsSideBar = () => {
  // Const
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');
  const [loaders, setLoaders] = useState({
    isPostsLoad: true,
    isCategoriesLoad: true,
  });
  // Const

  // ----------------------------------------------------------------------
  const fetchPosts = async () => {
    try {
      const data = await RequestAPI.findAll('posts?count=5&order[id]=desc');
      setPosts(data['hydra:member']);
      setLoaders({isPostsLoad: false});
    } catch (e) {
      console.log(e.response);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await RequestAPI.findAll(
        'categories?order[name]=desc&pagination=false'
      );
      setCategories(data['hydra:member']);
      setLoaders({isCategoriesLoad: false});
    } catch (e) {
      console.log(e.response);
    }
  };
  // ----------------------------------------------------------------------

  // Functions
  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };
  // Functions

  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------

  // useEffects
  useEffect(() => { fetchPosts() }, []);
  useEffect(() => { fetchCategories() }, []);
  // useEffects

  // ----------------------------------------------------------------------
  // ----------------------------------------------------------------------

  return (
    <Card className='border-0 sidebar'>
      <CardBody>
        <div id='search' className='mb-5'>
          <h4>Rechercher</h4>
          <FieldWithIcon
            value={search}
            onChange={handleChange}
            name='search'
            placeholder='Votre recherche ici...'
          />
        </div>

        <div id='categories' className='mb-5'>
          <h4>Catégories</h4>
          <ul>
            {!loaders.isCategoriesLoad && categories.map(category => (
              <li key={category.id}>
                <a href="#">
                  <i className='fas fa-folder-open'/>{' '}
                  {category.name} <span>({category.totalPosts})</span>
                </a>
              </li>
            ))}
            {loaders.isCategoriesLoad && <ThreeDots/>}
          </ul>
        </div>

        <div id='recents-posts' className='mb-5'>
          <h4>Articles récents</h4>
          <div className="recents-posts-items">
            {!loaders.isPostsLoad && posts.map(post => (
              <div className="clearfix recents-posts-item mb-3" key={post.id}>
                <a href={`/blog/${post.id}/${post.slug}`}>
                  <img src={postImg} alt="Post image"/>
                </a>
                <h4>
                  <a href={`/blog/${post.id}/${post.slug}`}>
                    {post.title}
                  </a>
                </h4>
              </div>
            ))}
          </div>
          {loaders.isPostsLoad && <ThreeDots/>}
        </div>

        <div id='tags'>
          <h4>Tags</h4>
          <div className="tags">
            <ul>
              <li><a href="#">App</a></li>
              <li><a href="#">IT</a></li>
              <li><a href="#">Business</a></li>
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
  )
};
