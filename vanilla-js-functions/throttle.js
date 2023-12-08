const throttle = (callback, delay = 600) => {
  let lastCallTime = 0;
  return (...args) => {
    const currentTime = Date.now();
    if (currentTime - lastCallTime >= delay) {
      lastCallTime = currentTime;
      callback(...args);
    }
  };
};
export default throttle;