import classes from '../classes';

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
