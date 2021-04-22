import React from 'react';
import { classNameMaker } from '../classes';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const pc = classNameMaker('sui-layout');

const Content: React.FunctionComponent<Props> = (props) => {
  const { className, ...restProps } = props;

  return (
    <div className={pc('content', { extra: className })} {...restProps}>
      content
    </div>
  );
};

export default Content;
