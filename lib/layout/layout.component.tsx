import React, { ReactElement } from 'react';
import { classNameMaker } from '../helpers/classes';
import Aside from './aside.component';

import './layout.styles.scss';

// Accepting attributes such as style, className ...
interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}

const prefixedClassname = classNameMaker('sui-layout');
const pc = prefixedClassname;

const Layout: React.FunctionComponent<Props> = (props) => {
  const { className, ...restProps } = props;

  // If Layout diretly has chidlren Aside, Layout's display direction will be change to row.
  const childrenAsArray = props.children as Array<ReactElement>;
  const hasAside =
    'length' in childrenAsArray &&
    (props.children as Array<ReactElement>).reduce(
      (result, node) => result || node.type === Aside,
      false
    );

  {
    // If Layout contains a direct Aside, it will add two classes.
    // Otherwise, it will only have one class.
  }
  return (
    <div
      className={pc(
        { '': true, hasAside },
        {
          extra: className,
        }
      )}
      {...restProps}
    >
      {props.children}
    </div>
  );
};

export default Layout;
export { Layout };
export { default as Header } from './header.component';
export { default as Aside } from './aside.component';
export { default as Content } from './content.component';
export { default as Footer } from './footer.component';
