import React, { Component } from 'react';

/*
  Напишите HOC который будет помимо компонента
  также принимать параметры которые он передаст
  в качестве пропов обёрнутому компоненту
*/

export const withGivenProps = injectedProps => WrappedComponent => {
  const WithGivenProps = props => (
    <WrappedComponent {...injectedProps} {...props} />
  );
  return WithGivenProps;
};
