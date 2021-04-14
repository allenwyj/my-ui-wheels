function classNameMaker(prefix: string) {
  return function (name?: string) {
    // filter if any element in the array is falsy value
    return [prefix, name].filter(Boolean).join('-');
  };
}

export { classNameMaker };
