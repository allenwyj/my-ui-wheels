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
}

const Form: React.FC<Props> = (props) => {
  const formData = props.value;

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onUserSubmit(e);
  };

  const onInputChange = (name: string, value: string) => {
    const newFormData = { ...formData, [name]: value };
    props.onUserChange(newFormData);
  };

  return (
    <form onSubmit={onSubmit}>
      <table className="sui-form-table">
        <tbody>
          {props.fields.map((field) => (
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
                  {props.errors[field.name] ? (
                    props.errorsDisplay === 'first' ? (
                      props.errors[field.name][0]
                    ) : (
                      props.errors[field.name].join(', ')
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
            <td className="sui-form-td">{props.buttons}</td>
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
