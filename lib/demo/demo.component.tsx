import React from 'react';

interface Props {
  codes: string;
}
const Demo: React.FC<Props> = (props) => {
  return (
    <>
      <div>{props.children}</div>
      <pre>{props.codes}</pre>
    </>
  );
};

export default Demo;
