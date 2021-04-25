import React from 'react';
import { alert, confirm } from '../dialog.component';

export default function () {
  return (
    <div>
      <h1>Example 3</h1>
      <button onClick={() => alert('Alert message')}>alert</button>
      <button
        onClick={() =>
          confirm(
            'Confirm message',
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
  );
}
