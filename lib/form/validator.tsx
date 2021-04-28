import { FormValue } from './form.component';

interface FormRule {
  key: string;
  required?: boolean;
  minLen?: number;
  maxLen?: number;
  pattern?: RegExp;
}

type FormRules = Array<FormRule>;

interface FormErrors {
  [K: string]: string[];
}

function isEmpty(value: any) {
  return value === undefined || value === null || value === '';
}

export function noError(errors: any) {
  return Object.keys(errors).length === 0;
}

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
  let errors: any = {};

  const addError = (key: string, message: string) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(message);
  };

  rules.map((rule) => {
    const value = formValue[rule.key];
    if (rule.required && isEmpty(value)) {
      addError(rule.key, 'Required');
    }

    if (rule.minLen && !isEmpty(value) && value.length < rule.minLen) {
      addError(rule.key, 'Too short');
    }

    if (rule.maxLen && !isEmpty(value) && value.length > rule.maxLen) {
      addError(rule.key, 'Too long');
    }

    if (rule.pattern && !isEmpty(value)) {
      if (!rule.pattern.test(value)) {
        addError(rule.key, 'Invalid pattern');
      }
    }
  });
  return errors;
};

export default Validator;
