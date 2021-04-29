import React from 'react';
import Button from './button.component';

export default function () {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h2>Sizes</h2>
        <Button level="primary" size="small">
          Small Button
        </Button>
        <Button level="primary" size="medium">
          Default Button
        </Button>
        <Button level="primary" size="large">
          Large Button
        </Button>
      </div>
      <div style={{ marginBottom: 20 }}>
        <h2>Basic Button</h2>
        <Button>Default Button</Button>
        <Button level="primary">Primary Button</Button>
        <Button level="text">Text Button</Button>
      </div>
      <div style={{ marginBottom: 20 }}>
        <h2>Color Indication</h2>
        <Button level="success">Success</Button>
        <Button level="warning">Warning</Button>
        <Button level="danger">Danger</Button>
        <Button level="info">Info</Button>
      </div>
      <div style={{ marginBottom: 20 }}>
        <h2>No Color Background</h2>
        <Button level="success" noBackground>
          Success
        </Button>
        <Button level="warning" noBackground>
          Warning
        </Button>
        <Button level="danger" noBackground>
          Danger
        </Button>
        <Button level="info" noBackground>
          Info
        </Button>
      </div>
    </div>
  );
}
