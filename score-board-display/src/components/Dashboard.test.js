import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from './Dashboard';

it('renders without crashing', () => {
  render(<Dashboard />);
});