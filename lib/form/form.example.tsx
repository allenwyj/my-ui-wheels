import Button from '../button/button.component';
import React, { useState } from 'react';
import Form, { FormValue } from './form.component';
import Validator, { noError } from './validator';

// This function creates an asynchronous event which
// is to stimulate an API call for checking whether
// the username already exists in the database or not.
const checkUserName = (
  username: string,
  onSuccess: () => void,
  onFailure: () => void
) => {
  // The existing usernames
  const usernames = ['allen1234', 'tom1234', 'jacky1234'];

  // Sitimulating an Ajax call.
  setTimeout(() => {
    // username is NOT unique
    if (usernames.indexOf(username) >= 0) {
      onFailure();

      // username is unique
    } else {
      onSuccess();
    }
  }, 3000);
};

export default function () {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: '',
  });

  // Fields to be displayed on the form.
  // input - decides the input type
  const [fields] = useState([
    { name: 'username', label: 'Username', input: { type: 'text' } },
    { name: 'password', label: 'Password', input: { type: 'password' } },
  ]);

  const [errors, setErrors] = useState({});

  // Custom username validator with a custom checking process.
  const customUsernameValidator = (username: string) => {
    // Custom validator rule.
    return new Promise<string>((resolve, reject) => {
      checkUserName(
        username,
        () => resolve('success'),
        // The rejected reason will be used as the displayed error message,
        // unless it gets customised by customisedErrorMessage().
        () => reject('unique')
      );
    });
  };

  const customisedErrorMessage = (message: string) => {
    const errorMessage: any = {
      unique: 'The username already exists.',
    };

    return errorMessage[message];
  };

  const onUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // This is to determine the rules for form validations.
    // The key decides the field that the rule will be applied to.
    // The order of rules decides the order of validations and the final output.
    const rules = [
      { key: 'username', required: true },
      { key: 'username', minLen: 8, maxLen: 16 },
      { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
      { key: 'username', customValidator: customUsernameValidator },
      { key: 'password', required: true },
    ];

    // Having the logic of how to perform or consume no error / having errors. 
    const errorConsumption = (errors: any) => {
      if (noError(errors)) {
        // Performed when no error.
      } else {
        setErrors(errors);
      }
    };

    // Validating user inputs
    Validator(formData, rules, errorConsumption);
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
      customisedErrorMessage={customisedErrorMessage}
    />
  );
}
