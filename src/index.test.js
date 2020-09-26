import React from 'react';
import * as ReactdomMock from 'react-dom';
import App from './App/App';

jest.mock('react-dom', () => ({ render: jest.fn() }));

test('index.js should render App component without crashing', () => {
  const div = document.createElement('div');
  div.id = 'app';
  document.body.appendChild(div);
  require('../src/index.js');
  expect(ReactdomMock.render).toHaveBeenCalledWith(<App />, div);
});
