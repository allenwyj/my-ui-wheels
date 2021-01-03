import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon.component';

const fn = () => {
  console.log('1');
};

ReactDOM.render(
  <div>
    <Icon name="wechat" />
    <Icon name="qq" />
    <Icon name="alipay" />
    <Icon name="google" onClick={fn} />
  </div>,
  document.getElementById('root')
);
