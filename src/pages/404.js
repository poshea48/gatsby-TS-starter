import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/layout/SEO';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Sorry this page {'"doesn\'t"'} exist</p>
    <Link to="/">Back Home</Link>
  </>
);

export default NotFoundPage;
