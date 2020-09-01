import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/layout/SEO';

const NotFoundPage: React.FC = () => (
  <>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Sorry, but this page does not exist</p>
    <Link to="/">Back Home</Link>
  </>
);

export default NotFoundPage;
