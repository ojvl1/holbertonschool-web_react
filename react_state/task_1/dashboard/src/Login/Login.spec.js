import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Login from '../Login/Login.jsx';
import '@testing-library/jest-dom';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Login Component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    render(<Login />);
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('renders login form elements', () => {
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'OK' })).toBeInTheDocument();
  });

  test('input gets focused when label is clicked', () => {
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.click(screen.getByText(/email/i));
    expect(emailInput).toHaveFocus();
  });

  test('submit button is disabled by default', () => {
    const submitButton = screen.getByRole('button', { name: 'OK' });
    expect(submitButton).toBeDisabled();
  });

  test('submit button becomes enabled when email and password are valid', () => {
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: 'OK' });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(submitButton).not.toBeDisabled();
  });
});
