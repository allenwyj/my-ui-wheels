import React, { useState } from 'react';
import Form, { FormValue } from './form.component';

export default function () {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: '',
  });

  // input tells what will be this input type
  const [fields] = useState([
    { name: 'username', label: 'Username', input: { type: 'text' } },
    { name: 'password', label: 'Password', input: { type: 'password' } },
  ]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData);
  };

  return (
    <Form
      value={formData}
      fields={fields}
      buttons={
        <>
          <button type="submit">submit</button>
          <button>back</button>
        </>
      }
      onChange={(newValue) => setFormData(newValue)}
      onSubmit={onSubmit}
    />
  );
}
