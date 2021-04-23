import classes, { classNameMaker } from '../classes';

describe('classes', () => {
  it('accepts one className', () => {
    const result = classes('a');
    expect(result).toEqual('a');
  });

  it('accepts two className', () => {
    const result = classes('a', 'b');
    expect(result).toEqual('a b');
  });

  it('excludes undefined value', () => {
    const result = classes('a', undefined);
    expect(result).toEqual('a');
  });

  it('excludes falsy values', () => {
    const result = classes('a', undefined, '中文', false, null);
    expect(result).toEqual('a 中文');
  });

  it('accepts 0 parameter', () => {
    const result = classes();
    expect(result).toEqual('');
  });
});

describe('classNameMaker', () => {
  it('accepts string or object', () => {
    const pc = classNameMaker('sui-layout');
    expect(pc('')).toEqual('sui-layout');
    expect(pc('x')).toEqual('sui-layout-x');
    expect(pc({ y: true, z: false })).toEqual('sui-layout-y');
    expect(pc({ y: true, z: true })).toEqual('sui-layout-y sui-layout-z');
    expect(pc({ y: true, z: true }, { extra: 'red' })).toEqual(
      'sui-layout-y sui-layout-z red'
    );
  });
});
