import React, { useState } from 'react';
import Dialog from './dialog.component';

export default function () {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);

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
    </>
  );
}
