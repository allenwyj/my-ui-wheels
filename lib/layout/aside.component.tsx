import React from 'react';
import { classNameMaker } from '../classes';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const pc = classNameMaker('sui-layout');

const Aside: React.FunctionComponent<Props> = (props) => {
  const { className, ...restProps } = props;

  return (
    <div className={pc('aside', { extra: className })} {...restProps}>
      aside
    </div>
  );
};

export default Aside;
