import React, { ReactFragment } from 'react';

export interface FormValue {
  [K: string]: any;
}

interface Props {
  value: FormValue;
  fields: Array<{ name: string; label: string; input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
}

const Form: React.FC<Props> = (props) => {
  const formData = props.value;

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };

  const onInputChange = (name: string, value: string) => {
    const newFormData = { ...formData, [name]: value };
    props.onChange(newFormData);
  };

  return (
    <form onSubmit={onSubmit}>
      {props.fields.map((field) => (
        <div key={field.name}>
          {field.label}
          <input
            type={field.input.type}
            value={formData[field.name]}
            onChange={(e) => onInputChange(field.name, e.target.value)}
          />
        </div>
      ))}
      <div>{props.buttons}</div>
    </form>
  );
};

export default Form;
