import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import globalStyles from '../../styles/globalStyles';
import theme from '../../styles/theme';
import SEO from './SEO';

const GlobalLayout: FunctionComponent = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${globalStyles()}
          a {
            color: ${theme.colors.black.blue};
          }

          input {
            border: 1px solid rgba(23, 39, 46, 0.4);
          }
          h1 {
            font-family: ${theme.fontFamily.heading};
          }
        `}
      />
      <SEO title={site.siteMetadata.title} />
      {children}
    </ThemeProvider>
  );
};

export default GlobalLayout;
