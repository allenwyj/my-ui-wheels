import React from 'react';
import { Icon } from '../index';

import { classNameMaker } from '../classes';

import './dialog.styles.scss';

interface Props {
  visible: boolean;
}

const scopedClass = classNameMaker('sui-dialog');
const sc = scopedClass;

const Dialog: React.FC<Props> = (props) => {
  return props.visible ? (
    <>
      <div className={sc('container')}></div>
      <div className={sc()}>
        <header className={sc('header')}>
          Dialog
          <div className={sc('close')}>
            <Icon name="close"></Icon>
          </div>
        </header>
        <main className={sc('main')}>{props.children}</main>
        <footer className={sc('footer')}>
          <button>cancel</button>
          <button>ok</button>
        </footer>
      </div>
    </>
  ) : null;
};

export default Dialog;
