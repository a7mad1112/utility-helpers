const debounce = (callback, delay = 600) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
export default debounce;
