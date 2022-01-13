import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import OffersPage from "./pages/OffersPage";
import ContactPage from "./pages/ContactPage";
import PostsPage from "./pages/Blog/PostsPage";
import SinglePost from "./pages/Blog/SinglePost";
import BlogComments from "./pages/Blog/BlogComments";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/blog/:id/:slug/' element={<SinglePost/>}>
        <Route path='comments' element={<BlogComments/>}/>
      </Route>
      <Route path='/blog' element={<PostsPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/offers' element={<OffersPage/>}/>
      <Route path='/services' element={<ServicesPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
  )
};

export default AppRouter;
