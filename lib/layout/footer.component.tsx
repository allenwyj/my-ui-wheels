import React from 'react';
import { classNameMaker } from '../classes';

const pc = classNameMaker('sui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Footer: React.FunctionComponent<Props> = (props) => {
  const { className, ...restProps } = props;
  
  return (
    <div className={pc('footer', { extra: className })} {...restProps}>
      footer
    </div>
  );
};

export default Footer;
