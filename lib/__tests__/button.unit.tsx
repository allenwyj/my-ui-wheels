import renderer from 'react-test-renderer';
import React from 'react';
import Button from '../button';

describe('button tests', () => {
  it('is a div', () => {
    const json = renderer.create(<Button />).toJSON();
    expect(json).toMatchSnapshot();
  });
});
