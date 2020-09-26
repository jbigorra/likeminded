import React from 'react';
import { getByRole, render, screen } from '@testing-library/react';

/**
 *
 *
 * An Input for the email
 * An Input for the password
 * An input for the user role (fixed selection between User, Mentor, Author)
 * A password strength meter. It should validate the following rules:
 * minimal length of 8 characters
 * one number
 * one uppercase letter
 * for mentors, at least two symbols (,!;\&,$,#, etc)
 * Button to submit the form
 * BONUS : Button to toggle password visibility
 *
 */

const ROLES = ['User', 'Mentor', 'Author'];

function RegistrationForm () {
  return (
    <form>
      <label htmlFor="registration-email">Email</label>
      <input id="registration-email"/>
      <label htmlFor="registration-user-role">User Role</label>
      <select id="registration-user-role">
        {ROLES.map((role, i) => <option key={i} value={role}>{role}</option>)}
      </select>
      <label htmlFor="registration-password">Password</label>
      <input id="registration-password"/>
      <label htmlFor="registration-confirm-password">Confirm password</label>
      <input id="registration-confirm-password"/>
      <button>Register</button>
    </form>
  );
}

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
