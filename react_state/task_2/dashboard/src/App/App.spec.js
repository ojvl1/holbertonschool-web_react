import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

describe('App Component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('renders Login component by default', () => {
    render(<App />);
    expect(
      screen.getByText(/Login to access the full dashboard/i)
    ).toBeInTheDocument();
  });

  test('renders CourseList after successful login', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'OK' }));

    expect(screen.getByText(/Available courses/i)).toBeInTheDocument();
  });
});
