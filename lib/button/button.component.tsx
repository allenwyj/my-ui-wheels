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
  noBackground?: Boolean;
}

const Button: React.FC<Props> = (props) => {
  const {
    className,
    children,
    level,
    size,
    noBackground,
    ...restProps
  } = props;

  return (
    <button
      className={classes(
        'sui-button',
        `sui-button-${level}`,
        `sui-button-${size}`,
        `${noBackground ? 'no-background' : ''}`,
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
  noBackground: false,
};

export default Button;
