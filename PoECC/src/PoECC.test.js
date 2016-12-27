import React from 'react';
import ReactDOM from 'react-dom';
import PoECC from './PoECC';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PoECC />, div);
});
