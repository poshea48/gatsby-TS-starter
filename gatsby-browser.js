import React from 'react';
import GlobalLayout from './src/components/layout/GlobalLayout';
import PropTypes from 'prop-types';

export const wrapPageElement = ({ element, props }) => {
  return <GlobalLayout {...props}>{element}</GlobalLayout>;
};

export const onRouteUpdate = ({ prevLocation }) => {
  if (prevLocation) {
    const skipLink = document.querySelector('.routeSkipLink');
    if (skipLink) {
      // @ts-ignore
      skipLink.focus();
    }
  }
};

wrapPageElement.propTypes = {
  props: PropTypes.object,
  element: PropTypes.func,
};
