function classes(...names: (string | undefined)[]) {
  // Boolean takes name and return true or false to filter
  return names.filter(Boolean).join(' ');
}

export default classes;
