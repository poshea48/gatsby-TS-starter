import React from 'react';
import GlobalLayout from '../src/components/layout/GlobalLayout';

export const wrapPageElement = ({ element, props }) => {
  return <GlobalLayout {...props}>{element}</GlobalLayout>;
};
