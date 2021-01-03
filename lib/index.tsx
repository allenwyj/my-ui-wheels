import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon.component';

const fn: React.MouseEventHandler = e => {
  console.log(e.currentTarget);
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
