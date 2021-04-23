function classes(...names: (string | undefined)[]) {
  // Boolean takes name and return true or false to filter
  return names.filter(Boolean).join(' ');
}

interface Options {
  extra: string | undefined;
}

interface ClassToggles {
  [K: string]: boolean;
}

function classNameMaker(prefix: string) {
  return function (name?: string | ClassToggles, options?: Options) {
    let name2;
    let result;

    // Pairing a name with prefix
    if (typeof name === 'string' || name === undefined) {
      name2 = name;
      // filter if any element in the array is falsy value
      result = [prefix, name2].filter(Boolean).join('-');

      // Pairing multiple names with prefix individually, and join them together.
    } else {
      name2 = Object.entries(name)
        // return the array which value is true
        .filter((kv) => kv[1])
        .map((kv) => kv[0]);

      result = name2
        .map((el) => [prefix, el].filter(Boolean).join('-'))
        .join(' ');
    }

    // Adding extra class into the result
    if (options && options.extra) {
      return [result, options.extra].filter(Boolean).join(' ');
    }
    return result;
  };
}

export { classNameMaker };

export default classes;
