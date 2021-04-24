import React from 'react';
import Demo from '../demo/demo.component';
import IconExample from './icon.example';
// 开启动态加载
// require('!!raw-loader!./icon.example')

const IconDemo = () => {
  return (
    <Demo codes={require('!!raw-loader!./icon.example').default}>
      <IconExample />
    </Demo>
  );
};

export default IconDemo;
