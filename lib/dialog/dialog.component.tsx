import React, { ReactElement } from 'react';
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

// Dynamically creating a component
const alert = (content: string) => {
  const component = (
    <Dialog
      visible={true}
      onClose={() => {
        // Clone and rerender the component(visible: false) on div
        ReactDOM.render(React.cloneElement(component, { visible: false }), div);
        // Unmount div from React DOM
        ReactDOM.unmountComponentAtNode(div);
        // Remove the empty div from dom.
        div.remove();
      }}
    >
      {content}
    </Dialog>
  );
  // Create a targeted div for React portal
  const div = document.createElement('div');
  document.body.append(div);
  // Render the component into div, but it actually will be placed on body.
  ReactDOM.render(component, div);
};

export { alert };

export default Dialog;
