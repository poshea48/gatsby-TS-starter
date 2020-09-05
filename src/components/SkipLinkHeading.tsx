import React, { PropsWithChildren } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

const styles = css`
  .routeSkipHeading {
    position: relative;
  }
  .routeSkipLink {
    display: inline-block;
    margin-left: -1em;
    opacity: 0;
    position: absolute;
    text-decoration: none;
  }
  .routeSkipLink:before {
    content: '⇦';
    display: block;
  }
  .routeSkipLink:focus,
  .routeSkipLink:hover {
    opacity: 1;
  }
`;

const SkipLinkHeading: React.FC<PropsWithChildren<{
  level: number;
  targetID: string;
}>> = ({ level = 1, targetID, children }) => {
  const Heading =
    level > 0 && level < 7
      ? (`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6')
      : 'h1';
  return (
    <Heading css={styles} className="routeSkipHeading">
      <Link
        to={`#${targetID}`}
        id="skip-main"
        className="routeSkipLink"
        aria-label={`back to ${targetID}`}
        title={`Skip to ${targetID}`}
      ></Link>
      {children}
    </Heading>
  );
};

export default SkipLinkHeading;
