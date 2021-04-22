import React from 'react';
import { classNameMaker } from '../classes';

import './layout.styles.scss';

// Accepting attributes such as style, className ...
interface Props extends React.HTMLAttributes<HTMLElement> {}

const prefixedClassname = classNameMaker('sui-layout');
const pc = prefixedClassname;

const Layout: React.FunctionComponent<Props> = (props) => {
  const { className, ...restProps } = props;
  
  return (
    <div className={pc('', { extra: className })} {...restProps}>
      {props.children}
    </div>
  );
};

export default Layout;
