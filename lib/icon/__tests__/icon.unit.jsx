import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Icon from '../icon.component';

describe('icon tests', () => {
  it('expects a svg', () => {
    const json = renderer.create(<Icon name="alipay" />).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('onClick', () => {
    const fn = jest.fn();
    const component = mount(<Icon name="alipay" onClick={fn} />);
    component.find('svg').simulate('click');
    expect(fn).toBeCalled();
  });
});
