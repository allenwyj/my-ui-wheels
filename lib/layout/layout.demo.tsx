import React from 'react';
import Demo from '../demo/demo.component';
import LayoutExample1 from './examples/layout.example1';
import LayoutExample2 from './examples/layout.example2';
import LayoutExample3 from './examples/layout.example3';
import LayoutExample4 from './examples/layout.example4';

const LayoutDemo = () => {
  return (
    <div>
      <Demo codes={require('!!raw-loader!./examples/layout.example1').default}>
        <LayoutExample1 />
      </Demo>
      <Demo codes={require('!!raw-loader!./examples/layout.example2').default}>
        <LayoutExample2 />
      </Demo>
      <Demo codes={require('!!raw-loader!./examples/layout.example3').default}>
        <LayoutExample3 />
      </Demo>
      <Demo codes={require('!!raw-loader!./examples/layout.example4').default}>
        <LayoutExample4 />
      </Demo>
    </div>
  );
};

export default LayoutDemo;
