import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type MetaItem = {
  name: string;
  content: string;
};

type SEOProps = {
  title?: string;
  description?: string;
  lang?: string;
  url?: string;
  author?: string;
  keywords?: string[];
  meta?: MetaItem[];
  image?: string;
};

const SEO: React.FC<SEOProps> = props => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `
  );

  const { siteMetadata } = site;

  const {
    title,
    description,
    url,
    // author,
    meta = [],
    keywords = [],
    image,
  } = siteMetadata;
  const siteTitle = props.title || title;
  const siteDescription = props.description || description;
  const siteUrl = props.url || url || '';
  // const siteAuthor = props.author || author;
  const siteImage = props.image || image || '';
  const siteKeywords = [...keywords, props.keywords].join(',');
  const metaData = [
    {
      name: 'canonical',
      content: siteUrl,
    },
    {
      name: 'description',
      content: siteDescription,
    },
    {
      name: 'image',
      content: siteImage,
    },
    {
      name: 'og:url',
      content: siteUrl,
    },
    {
      name: 'og:type',
      content: 'article',
    },
    {
      name: 'og:title',
      content: siteTitle,
    },
    {
      name: 'og:description',
      content: siteDescription,
    },
    {
      name: 'og:image',
      content: siteImage,
    },
    {
      name: 'keywords',
      content: siteKeywords,
    },
  ].concat(meta);

  const linkData = [
    {
      rel: 'apple-touch-icon',
      href: 'icons/apple-touch-icon.png',
    },
  ];
  return (
    <Helmet htmlAttributes={{ lang: 'en' }} link={linkData} meta={metaData}>
      <title>{siteTitle}</title>
    </Helmet>
  );
};

export default SEO;
