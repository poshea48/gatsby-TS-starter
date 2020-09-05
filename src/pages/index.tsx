import React from 'react';
// import { Link } from 'gatsby';
import SEO from '../components/layout/SEO';
import SkipLinkHeading from '../components/SkipLinkHeading';
import styled from '@emotion/styled';

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 3em;
`;

const IndexPage: React.FC = () => (
  <Container>
    <SEO title="Home" />
    <SkipLinkHeading level={1} targetID="navigation">
      Welcome to your new Gatsby site.
    </SkipLinkHeading>
  </Container>
);

export default IndexPage;
