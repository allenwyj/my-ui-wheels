import React from 'react';
import { classNameMaker } from '../classes';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const pc = classNameMaker('sui-layout');

const Header: React.FunctionComponent<Props> = (props) => {
  const { className, ...restProps } = props;

  return (
    <div className={pc('header', { extra: className })} {...restProps}>
      header
    </div>
  );
};

export default Header;
