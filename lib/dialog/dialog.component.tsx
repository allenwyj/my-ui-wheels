import React, { ReactElement, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '../index';

import { classNameMaker } from '../classes';

import './dialog.styles.scss';

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const prefixedClassname = classNameMaker('sui-dialog');
const pc = prefixedClassname;

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
      <div className={pc('mask')} onClick={onClickMask}></div>
      <div className={pc()}>
        <header className={pc('header')}>
          Dialog
          <div className={pc('close')} onClick={onClickClose}>
            <Icon name="close"></Icon>
          </div>
        </header>
        <main className={pc('main')}>{props.children}</main>
        <footer className={pc('footer')}>
          {props.buttons &&
            props.buttons.map((button, index) =>
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

// Convenient APIs - alert, confirm, modal
const modal = (
  content: ReactNode,
  buttons?: Array<ReactElement>,
  afterClose?: () => void
) => {
  // Close the dialog
  const close = () => {
    // Clone and rerender the component(visible: false) on div
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    // Unmount div from React DOM
    ReactDOM.unmountComponentAtNode(div);
    // Remove the empty div from dom.
    div.remove();
  };

  const component = (
    <Dialog
      visible={true}
      onClose={() => {
        close();
        afterClose && afterClose();
      }}
      buttons={buttons}
    >
      {content}
    </Dialog>
  );

  // Create a targeted div for React portal
  const div = document.createElement('div');
  document.body.appendChild(div);
  // Render the component into div, but it actually will be placed on body.
  ReactDOM.render(component, div);

  return close;
};

const alert = (content: string) => {
  const button = <button onClick={() => close()}>OK</button>;
  const close = modal(content, [button]);
};

// Accepting yes and no functions.
const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close();
    yes && yes();
  };

  const onNo = () => {
    close();
    no && no();
  };

  const buttons = [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>,
  ];

  // Clicking close button is equal to clicking no button,
  // so passing function no as afterClose parameter
  const close = modal(content, buttons, no);
};

export { alert, confirm, modal };

export default Dialog;
