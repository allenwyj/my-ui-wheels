import React, { useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

interface Props {
  codes: string;
}
const Demo: React.FC<Props> = (props) => {
  const [codeVisible, setCodeVisible] = useState(false);
  return (
    <>
      <div className="example">{props.children}</div>
      <div>
        <button onClick={() => setCodeVisible(!codeVisible)}>Show code</button>
        {codeVisible && (
          <Highlight {...defaultProps} code={props.codes} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        )}
      </div>
    </>
  );
};

export default Demo;
