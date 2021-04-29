import React, { InputHTMLAttributes } from 'react';
import classes from '../helpers/classes';
import './input.styles.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<Props> = (props) => {
  const { className, ...restProps } = props;
  // const prefixedClassname = classNameMaker('sui-input');
  // const pc = prefixedClassname;

  return <input className={classes('sui-input', className)} {...restProps} />;
};

export default Input;
