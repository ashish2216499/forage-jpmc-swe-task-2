import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders a heading and handles user interaction', () => {
  render(<App />);

  // Assertions
  const headingElement = screen.getByRole('heading');
  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveTextContent('My App');

  // Simulate user interaction (optional)
  // const buttonElement = screen.getByRole('button');
  // userEvent.click(buttonElement);
  // expect(screen.getByText('Clicked')).toBeInTheDocument();
});
