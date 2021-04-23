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
  return function (name: string | ClassToggles, options?: Options) {
    const nameInObject = typeof name === 'string' ? { [name]: name } : name;

    // Pairing a name or multiple names with prefix.
    const prefixedName = Object.entries(nameInObject)
      // return the array which value is not false (so everything excepts false)
      .filter((kv) => kv[1] !== false)
      // take the name(s)
      .map((kv) => kv[0])
      // Pairing a name or multiple names with prefix individually
      .map((name) => [prefix, name].filter(Boolean).join('-'))
      // and join them together.
      .join(' ');

    // Adding extra class into the result
    if (options && options.extra) {
      return [prefixedName, options.extra].filter(Boolean).join(' ');
    }
    return prefixedName;
  };
}

export { classNameMaker };

export default classes;
