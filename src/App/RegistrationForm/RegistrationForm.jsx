import React, { useState } from 'react';
import { PasswordEvaluator } from './PasswordEvaluator';

export const ROLES = ['User', 'Mentor', 'Author'];

const regularRegexp = /[a-zA-Z]/;
const mentorRegexp = /[a-z]/;

export function RegistrationForm () {
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [regExp, setRegExp] = useState(regularRegexp);

  function handlePasswordInput (e) {
    const pass = e.target.value;
    setPassword(pass);
  }

  function handlePasswordConfirmationInput (e) {
    const pass = e.target.value;
    setConfirmedPassword(pass);
  }

  function handleRoleSelection (e) {
    const role = e.target.value;
    const regexp = role === ROLES[1] ? mentorRegexp : regularRegexp;
    setRegExp(regexp);
  }

  return (
    <form>
      <label htmlFor="registration-email">Email</label>
      <input id="registration-email" type="email" name="email" required/>

      <label htmlFor="registration-user-role">User Role</label>
      <select id="registration-user-role" name="user-role" onSelect={handleRoleSelection}>
        {ROLES.map((role, i) => <option key={i} value={role}>{role}</option>)}
      </select>

      <label htmlFor="registration-password">Password</label>
      <input
        id="registration-password"
        name="password"
        type="password"
        onInput={handlePasswordInput}
        minLength="8"
        required
      />

      <label htmlFor="registration-confirm-password">Confirm password</label>
      <input
        id="registration-confirm-password"
        name="confirm-password"
        type="password"
        onInput={handlePasswordConfirmationInput}
        minLength="8"
        required
      />

      <PasswordEvaluator
        password={password}
        confirmedPassword={confirmedPassword}
        regExp={regExp}
      />

      <button>Register</button>
    </form>
  );
}
