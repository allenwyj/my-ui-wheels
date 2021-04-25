import React from 'react';
import Demo from '../demo/demo.component';
import DialogExample1 from './examples/dialog.example1';
import DialogExample2 from './examples/dialog.example2';
import DialogExample3 from './examples/dialog.example3';
import DialogExample4 from './examples/dialog.example4';

const DialogDemo = () => {
  return (
    <div>
      <Demo codes={require('!!raw-loader!./examples/dialog.example1').default}>
        <DialogExample1 />
      </Demo>
      <Demo codes={require('!!raw-loader!./examples/dialog.example2').default}>
        <DialogExample2 />
      </Demo>
      <Demo codes={require('!!raw-loader!./examples/dialog.example3').default}>
        <DialogExample3 />
      </Demo>
      <Demo codes={require('!!raw-loader!./examples/dialog.example4').default}>
        <DialogExample4 />
      </Demo>
    </div>
  );
};

export default DialogDemo;
