function add(a: number, b: number) {
  return a + b;
}

describe('my first test case', () => {
  it('1+2 = 3?', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
