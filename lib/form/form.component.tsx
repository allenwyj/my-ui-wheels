import React, { ReactFragment } from 'react';
import Input from '../input/input.component';

import './form.styles.scss';

export interface FormValue {
  [K: string]: any;
}

interface Props {
  value: FormValue;
  fields: Array<{ name: string; label: string; input: { type: string } }>;
  buttons: ReactFragment;
  onUserSubmit: React.FormEventHandler<HTMLFormElement>;
  onUserChange: (value: FormValue) => void;
  errors: { [K: string]: string[] };
  errorsDisplay?: 'first' | 'all';
  customisedErrorMessage?: (message: string) => string;
}

const Form: React.FC<Props> = (props) => {
  const {
    fields,
    buttons,
    errors,
    errorsDisplay,
    customisedErrorMessage,
    onUserChange,
    onUserSubmit,
    value: formData,
  } = props;

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onUserSubmit(e);
  };

  const onInputChange = (name: string, value: string) => {
    const newFormData = { ...formData, [name]: value };
    onUserChange(newFormData);
  };

  // Using for displaying either the customised error message or the default error message.
  const newErrorMessage = (message: string) => {
    const errorMessage: any = {
      required: 'This field cannot be empty.',
      minLen: 'The length of this field is too short.',
      maxLen: 'The length of this field is too long.',
    };

    return (
      (customisedErrorMessage && customisedErrorMessage(message)) ||
      errorMessage[message] ||
      'Unknown error.'
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <table className="sui-form-table">
        <tbody>
          {fields.map((field) => (
            <tr className="sui-form-tr" key={field.name}>
              <td className="sui-form-td">
                <span className="sui-form-label">{field.label}</span>
              </td>
              <td className="sui-form-td">
                <Input
                  className="sui-form-input"
                  type={field.input.type}
                  value={formData[field.name]}
                  onChange={(e) => onInputChange(field.name, e.target.value)}
                />
                <div className="sui-form-message">
                  {errors[field.name] ? (
                    errorsDisplay === 'first' ? (
                      newErrorMessage(errors[field.name][0])
                    ) : (
                      errors[field.name].map(newErrorMessage).join(', ')
                    )
                  ) : (
                    <span>&nbsp;</span>
                  )}
                </div>
              </td>
            </tr>
          ))}
          <tr className="sui-form-tr">
            <td className="sui-form-td" />
            <td className="sui-form-td">{buttons}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

Form.defaultProps = {
  errorsDisplay: 'first',
};

export default Form;
