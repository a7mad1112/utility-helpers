const memoize = (callback) => {
  const cache = {};
  return (...args) => {
    if (args.toString() in cache) {
      console.log(cache);
      return cache[args.toString()];
    }
    const result = callback(...args);
    cache[args.toString()] = result;
    return result;
  };
};
export default memoize;
