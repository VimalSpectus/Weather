import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('check label and submit text', () => {
  render(<App />);
  const inputNode = screen.getByLabelText('Please Enter Conry Name');
  expect(inputNode).toBeInTheDocument();
  const aboutAnchorNode = screen.getByText(/Submit/i)
  expect(aboutAnchorNode).toBeInTheDocument();
});

test('Input field disable and Enable', () => {
  render(<App />);
  const inputNode = screen.getByLabelText('Please Enter Conry Name');
  expect(inputNode).toBeInTheDocument();
  const aboutAnchorNode = screen.getByText(/Submit/i)
  expect(aboutAnchorNode).toBeInTheDocument();
});
