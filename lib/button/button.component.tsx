import classes from '../helpers/classes';
import React, { ButtonHTMLAttributes } from 'react';
import './button.styles.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?:
    | 'normal'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'text';
  size?: 'large' | 'medium' | 'small';
}

const Button: React.FC<Props> = (props) => {
  const { className, children, level, size, ...restProps } = props;

  return (
    <button
      className={classes(
        'sui-button',
        `sui-button-${level}`,
        `sui-button-${size}`,
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  level: 'normal',
  size: 'medium',
};

export default Button;
