import { FormValue } from './form.component';

interface FormRule {
  key: string;
  required?: boolean;
  minLen?: number;
  maxLen?: number;
  pattern?: RegExp;
  customValidator?: (value: string) => Promise<string>;
}

type FormRules = Array<FormRule>;

type ErrorInfo = string | Promise<string>;

const Validator = (
  formValue: FormValue,
  rules: FormRules,
  onCallback: (errors: any) => void
): void => {
  // errors object: {key1: [error1, error2, ...], key2: [], key3: [], ...}
  const errors: { [K: string]: ErrorInfo[] } = {};

  // error can be a promise.
  const addError = (key: string, error: ErrorInfo) => {
    errors[key] = errors[key] || [];
    errors[key].push(error);
  };

  // Applying each rule to its validating value.
  for (const rule of rules) {
    const userInput = formValue[rule.key];

    // If the custom validtor exists
    if (rule.customValidator) {
      const promise = rule.customValidator(userInput);
      addError(rule.key, promise);
    }

    if (rule.required && isEmpty(userInput)) {
      addError(rule.key, 'required');
    }

    if (rule.minLen && !isEmpty(userInput) && userInput.length < rule.minLen) {
      addError(rule.key, 'minLen');
    }

    if (rule.maxLen && !isEmpty(userInput) && userInput.length > rule.maxLen) {
      addError(rule.key, 'maxLen');
    }

    if (rule.pattern && !isEmpty(userInput)) {
      !rule.pattern.test(userInput) && addError(rule.key, 'pattern');
    }
  }

  // [[key1, error1], [key1, error2], [key2, error1], ...]
  const flattenErrorList = flat(
    // For each key in errors, splitting each key's errors into [key, error]
    // array format.
    // error can be a string or Promise<string>.
    Object.keys(errors).map((key) => {
      return errors[key].map<[string, ErrorInfo]>((stringOrPromise) => [
        key,
        stringOrPromise,
      ]);
    })
  );

  const promiseList = flattenErrorList.map(([key, stringOrPromise]) => {
    const promise =
      stringOrPromise instanceof Promise
        ? stringOrPromise
        : Promise.reject(stringOrPromise);

    // Although the promise gets rejected, the new promise returned by promise.then() will be in resolved.
    return promise.then<[string, undefined], [string, string]>(
      // Custom validator (promise) passed.
      () => [key, undefined],
      // Returning a value will not cause the Promise([key, reason]) returned by then rejected.
      (reason: string) => [key, reason]
    );
  });

  Promise.all(promiseList).then((results) => {
    onCallback(zip(results.filter<[string, string]>(hasError)));
  });
};

function isEmpty(value: any) {
  return value === undefined || value === null || value === '';
}

// Excluding undefined error array
function hasError(
  error: [string, undefined] | [string, string]
): error is [string, string] {
  return typeof error[1] === 'string';
}

function noError(errors: any) {
  return Object.keys(errors).length === 0;
}

// flat() creates a new array with its sub-array elements.
function flat<T>(inputArray: Array<T | T[]>) {
  const result: T[] = [];
  for (const el of inputArray) {
    el instanceof Array ? result.push(...el) : result.push(el);
  }

  return result;
}

// kvList = [[key1: value1], [key1, value2], ...]
function zip(kvList: Array<[string, string]>) {
  const result: { [K: string]: string[] } = {};
  kvList.map(([key, value]) => {
    result[key] = result[key] || [];
    result[key].push(value);
  });
  return result;
}

export default Validator;
export { noError };
