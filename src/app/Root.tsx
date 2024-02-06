import React from 'react';
import { Provider } from 'react-redux';

import { appStore } from './appStore';

import { baseLayout } from './layout/baseLayout';

import './styles/base.scss';

const Root = () => (
  <React.StrictMode>
    <Provider store={appStore}>{baseLayout()}</Provider>
  </React.StrictMode>
);

export { Root };
