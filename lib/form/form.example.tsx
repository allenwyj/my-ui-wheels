import Button from '../button/button.component';
import React, { useState } from 'react';
import Form, { FormValue } from './form.component';
import Validator, { noError } from './validator';

// The existing usernames
const usernames = ['allen', 'tom', 'jacky'];
// Sitimulating an Ajax call.
const checkUserName = (
  username: string,
  onSuccess: () => void,
  onFailure: () => void
) => {
  setTimeout(() => {
    console.log('setTimeout runs');

    // username is NOT unique
    if (usernames.indexOf(username) >= 0) {
      console.log('Not unique');
      onFailure();

      // username is unique
    } else {
      console.log('Unique');
      onSuccess();
    }
  }, 3000);
};

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
      {
        key: 'username',
        // Custom validator with a custom process of validation.
        validator: {
          name: 'unique',
          validate(username: string) {
            console.log('Calling custom validator.validate method.');
            return new Promise<void>((resolve, reject) => {
              checkUserName(username, resolve, reject);
            });
          },
        },
      },
      { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
      { key: 'password', required: true },
    ];

    // Validating user inputs
    Validator(formData, rules, (errors) => {
      console.log('All checks have been made.');
      console.log(errors);
      if (noError(errors)) {
        // No error performed.
      } else {
        setErrors(errors);
      }
    });
  };

  return (
    <Form
      value={formData}
      fields={fields}
      errors={errors}
      buttons={
        <>
          <Button level="primary" size="medium" type="submit">
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
