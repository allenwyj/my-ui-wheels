import React from 'react';
import { modal } from '../dialog.component';

export default function () {
  const openModal = () => {
    // modal() returns an api that can close the dialog
    const close = modal(
      <h1>
        Hello<button onClick={() => close()}>close</button>
      </h1>
    );
  };

  return (
    <div>
      <h1>Example 4</h1>
      <button onClick={openModal}>modal</button>
    </div>
  );
}
