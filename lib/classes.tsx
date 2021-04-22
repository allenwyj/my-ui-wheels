interface Options {
  extra: string | undefined;
}

function classNameMaker(prefix: string) {
  return function (name?: string, options?: Options) {
    // filter if any element in the array is falsy value
    const result = [prefix, name].filter(Boolean).join('-');
    if (options && options.extra) {
      return [result, options.extra].filter(Boolean).join(' ');
    }
    return result;
  };
}

export { classNameMaker };
