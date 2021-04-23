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

const classNameMaker = (prefix: string) => (
  name: string | ClassToggles,
  options?: Options
) =>
  // Pairing a name or multiple names with prefix.
  Object.entries(typeof name === 'string' ? { [name]: name } : name)
    // return the array which value is not false (so everything excepts false)
    .filter((kv) => kv[1] !== false)
    // take the name(s)
    .map((kv) => kv[0])
    // Pairing a name or multiple names with prefix individually
    .map((name) => [prefix, name].filter(Boolean).join('-'))
    // Adding extra class into the result
    .concat((options && options.extra) || [])
    // and join them together.
    .join(' ');

export { classNameMaker };

export default classes;
