import React, { useState } from 'react';
import Dialog from '../dialog.component';

export default function () {
  const [x, setX] = useState(false);

  return (
    <div>
      <h1>Example 2</h1>
      <button onClick={() => setX(!x)}>click</button>
      <Dialog
        visible={x}
        buttons={[
          <button onClick={() => setX(false)}>OK</button>,
          <button onClick={() => setX(false)}>Cancel</button>,
        ]}
        onClose={() => setX(false)}
        closeOnClickMask
      >
        <div>hi</div>
      </Dialog>
    </div>
  );
}
