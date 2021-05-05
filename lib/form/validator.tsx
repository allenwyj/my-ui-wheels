import { FormValue } from './form.component';

interface FormRule {
  key: string;
  required?: boolean;
  minLen?: number;
  maxLen?: number;
  pattern?: RegExp;
  validator?: {
    name: string;
    validate: (value: string) => Promise<void>;
  };
}

type FormRules = Array<FormRule>;

interface ErrorInfo {
  message: string;
  promise?: Promise<any>;
}

function isEmpty(value: any) {
  return value === undefined || value === null || value === '';
}

export function noError(errors: any) {
  return Object.keys(errors).length === 0;
}

const Validator = (
  formValue: FormValue,
  rules: FormRules,
  onCallback: (errors: any) => void
): void => {
  let errors: any = {};

  // error can contain a promise.
  // error object: {key1:[{message, promise?}, {}, {}, ...], key2: [], key3: [], ...}
  const addError = (key: string, error: ErrorInfo) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(error);
  };

  for (const rule of rules) {
    const userInput = formValue[rule.key];

    // If the custom validtor exists
    if (rule.validator && rule.validator.validate) {
      console.log('Has custom validator.');
      const promise = rule.validator.validate(userInput);
      addError(rule.key, { message: 'The username already exists.', promise });
    }

    if (rule.required && isEmpty(userInput)) {
      addError(rule.key, { message: 'Required' });
    }

    if (rule.minLen && !isEmpty(userInput) && userInput.length < rule.minLen) {
      addError(rule.key, { message: 'Too short' });
    }

    if (rule.maxLen && !isEmpty(userInput) && userInput.length > rule.maxLen) {
      addError(rule.key, { message: 'Too long' });
    }

    if (rule.pattern && !isEmpty(userInput)) {
      if (!rule.pattern.test(userInput)) {
        addError(rule.key, { message: 'Invalid pattern' });
      }
    }
  }

  const promiseList = flat(Object.values(errors))
    .filter((el) => el.promise)
    .map((el) => el.promise);

  // Passing the errors object back when all asynchronous events are resolved/rejected.
  Promise.all(promiseList).then(
    () => {
      // FIXME: Unique username will still get error message.
      console.log('onFulfilled');
      const newErrorsList = Object.keys(errors).map<[string, string[]]>(
        (key) => [key, errors[key].map((el: ErrorInfo) => el.message)]
      );
      const newErrorsObj = fromEntries(newErrorsList);

      onCallback(newErrorsObj);
    },
    () => {
      console.log('onRejected');
      // Getting the message from each error
      const newErrorsList = Object.keys(errors).map<[string, string[]]>(
        (key) => [key, errors[key].map((el: ErrorInfo) => el.message)]
      );
      const newErrorsObj = fromEntries(newErrorsList);

      onCallback(newErrorsObj);
    }
  );
};

export default Validator;

// flat() creates a new array with its sub-array elements.
const flat = (inputArray: Array<any>) => {
  const result = [];
  for (const el of inputArray) {
    el instanceof Array ? result.push(...el) : result.push(el);
  }

  return result;
};

const fromEntries = (inputArray: Array<[string, string[]]>) => {
  const result: { [key: string]: string[] } = {};
  for (const el of inputArray) {
    result[el[0]] = el[1];
  }

  return result;
};
