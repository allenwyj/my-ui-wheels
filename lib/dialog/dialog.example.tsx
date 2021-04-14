import React, { useState } from 'react';
import Dialog from './dialog.component';

export default function () {
  const [x, setX] = useState(false);
  return (
    <div>
      <button onClick={() => setX(!x)}>click</button>
      <Dialog visible={x}>
        <div>hi</div>
      </Dialog>
    </div>
  );
}
