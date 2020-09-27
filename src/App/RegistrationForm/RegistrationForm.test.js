import React from 'react';
import { render, screen } from '@testing-library/react';
import { RegistrationForm, ROLES } from './RegistrationForm';

describe('RegistrationForm component', () => {
  test('should render with 3 inputs, one submit button', () => {
    render(<RegistrationForm/>);

    screen.getByLabelText(/email/i);
    screen.getByLabelText(/Password/);
    screen.getByLabelText(/confirm password/i);
    screen.getByRole('button', { name: /register/i });

    const dropdown = screen.getByLabelText(/user role/i);
    const options = dropdown.querySelectorAll('option');

    expect(options.length).toBe(ROLES.length);

    options.forEach(option => {
      expect(ROLES.includes(option.textContent)).toBeTruthy();
      expect(ROLES.includes(option.value)).toBeTruthy();
    });
  });
});
