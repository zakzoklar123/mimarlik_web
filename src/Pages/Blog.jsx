import React from 'react';
import AppBar from '../Components/Home Components/AppBar';
import BlogHero from '../Components/Blog Components/BlogHero';
import BlogPosts from '../Components/Blog Components/BlogPosts';
import Footer from '../Components/Home Components/Footer';

const Blog = () => {
  return (
    <>
      <AppBar />
      <BlogHero />
      <BlogPosts />
      <Footer />
    </>
  );
};

export default Blog;
