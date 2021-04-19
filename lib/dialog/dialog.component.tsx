import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '../index';

import { classNameMaker } from '../classes';

import './dialog.styles.scss';

interface Props {
  visible: boolean;
  buttons: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const scopedClass = classNameMaker('sui-dialog');
const sc = scopedClass;

const Dialog: React.FC<Props> = (props) => {
  // Taking an onClick function from the user to control the closure of dialog
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };

  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };

  const outputContent = props.visible ? (
    <>
      <div className={sc('mask')} onClick={onClickMask}></div>
      <div className={sc()}>
        <header className={sc('header')}>
          Dialog
          <div className={sc('close')} onClick={onClickClose}>
            <Icon name="close"></Icon>
          </div>
        </header>
        <main className={sc('main')}>{props.children}</main>
        <footer className={sc('footer')}>
          {props.buttons.map((button, index) =>
            React.cloneElement(button, { key: index })
          )}
        </footer>
      </div>
    </>
  ) : null;

  return ReactDOM.createPortal(outputContent, document.body);
};

Dialog.defaultProps = {
  closeOnClickMask: false,
};

export default Dialog;
