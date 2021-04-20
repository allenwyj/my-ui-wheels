import React, { useState } from 'react';
import Dialog, { alert, confirm, modal } from './dialog.component';

export default function () {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);

  const openModal = () => {
    // modal() returns an api that can close the dialog
    const close = modal(
      <h1>
        Hello<button onClick={() => close()}>close</button>
      </h1>
    );
  };

  return (
    <>
      <div>
        <h1>Example 1</h1>
        <button onClick={() => setX(!x)}>click</button>
        <Dialog
          visible={x}
          buttons={[
            <button onClick={() => setX(false)}>1</button>,
            <button onClick={() => setX(false)}>2</button>,
          ]}
          onClose={() => setX(false)}
        >
          <div>hi</div>
        </Dialog>
      </div>

      <div>
        <h1>Example 2</h1>
        <button onClick={() => setY(!y)}>click</button>
        <Dialog
          visible={y}
          buttons={[
            <button onClick={() => setY(false)}>1</button>,
            <button onClick={() => setY(false)}>2</button>,
          ]}
          onClose={() => setY(false)}
          closeOnClickMask
        >
          <div>hi</div>
        </Dialog>
      </div>

      <div>
        <h1>Example 3</h1>
        <button onClick={() => alert('1')}>alert</button>
        <button
          onClick={() =>
            confirm(
              '1',
              () => {
                console.log('Yes clicked');
              },
              () => {
                console.log('No clicked');
              }
            )
          }
        >
          confirm
        </button>
      </div>

      <div>
        <h1>Example 4</h1>
        <button onClick={openModal}>modal</button>
      </div>
    </>
  );
}
