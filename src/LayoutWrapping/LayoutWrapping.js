import React, { Component } from 'react';

/*
  Напишите HOC, который обернёт компонент в `div`,
  со стилем 'position: absolute'
*/

export const wrapWithAbsolutePosition = WrappedComponent => {
  const WrapWithAbsolutePosition = props => {
    return (
      <div style={{ position: 'absolute' }}>
        <WrappedComponent />
      </div>
    );
  };
  return WrapWithAbsolutePosition;
};
