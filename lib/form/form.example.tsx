import Button from '../button/button.component';
import React, { useState } from 'react';
import Form, { FormValue } from './form.component';
import Validator, { noError } from './validator';

export default function () {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: '',
  });

  // Fields to be displayed
  // input property decides the input type
  const [fields] = useState([
    { name: 'username', label: 'Username', input: { type: 'text' } },
    { name: 'password', label: 'Password', input: { type: 'password' } },
  ]);

  const [errors, setErrors] = useState({});

  const onUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Determining the rules for validating user inputs.
    // The order of rules decides the order of validations.
    const rules = [
      { key: 'username', required: true },
      { key: 'username', minLen: 8, maxLen: 16 },
      { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
      { key: 'password', required: true },
    ];

    // Validating user inputs
    const errors = Validator(formData, rules);
    if (noError(errors)) {
    } else {
      setErrors(errors);
    }
  };

  return (
    <Form
      value={formData}
      fields={fields}
      errors={errors}
      buttons={
        <>
          <Button level="primary" size="large" type="submit">
            Submit
          </Button>
          <Button level="normal">Back</Button>
        </>
      }
      onUserChange={(newValue) => setFormData(newValue)}
      onUserSubmit={onUserSubmit}
    />
  );
}
