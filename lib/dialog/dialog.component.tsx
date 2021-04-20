import React, { ReactElement, ReactFragment, ReactNode } from 'react';
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
const alert = (content: string) => {
  const onClose = () => {
    // Clone and rerender the component(visible: false) on div
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    // Unmount div from React DOM
    ReactDOM.unmountComponentAtNode(div);
    // Remove the empty div from dom.
    div.remove();
  };

  // Dynamically creating a component
  const component = (
    <Dialog
      visible={true}
      onClose={onClose}
      buttons={[<button onClick={onClose}>OK</button>]}
    >
      {content}
    </Dialog>
  );

  // Create a targeted div for React portal
  const div = document.createElement('div');
  document.body.appendChild(div);
  // Render the component into div, but it actually will be placed on body.
  ReactDOM.render(component, div);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    // Unmount div from React DOM
    ReactDOM.unmountComponentAtNode(div);
    // Remove the empty div from dom.
    div.remove();
    yes && yes();
  };

  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    // Unmount div from React DOM
    ReactDOM.unmountComponentAtNode(div);
    // Remove the empty div from dom.
    div.remove();
    no && no();
  };

  const component = (
    <Dialog
      visible={true}
      onClose={onNo}
      buttons={[
        <button onClick={onYes}>yes</button>,
        <button onClick={onNo}>no</button>,
      ]}
    >
      {content}
    </Dialog>
  );

  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

const modal = (content: ReactNode | ReactFragment) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    // Unmount div from React DOM
    ReactDOM.unmountComponentAtNode(div);
    // Remove the empty div from dom.
    div.remove();
  };

  const component = (
    <Dialog onClose={onClose} visible={true}>
      {content}
    </Dialog>
  );

  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);

  // exposing an api for closing the modal
  return onClose;
};

export { alert, confirm, modal };

export default Dialog;
