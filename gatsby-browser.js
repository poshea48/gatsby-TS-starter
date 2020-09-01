import React from 'react';
import GlobalLayout from './src/components/layout/GlobalLayout';
import PropTypes from 'prop-types';

export const wrapPageElement = ({ element, props }) => {
  return <GlobalLayout {...props}>{element}</GlobalLayout>;
};

wrapPageElement.propTypes = {
  props: PropTypes.object,
  element: PropTypes.func,
};
