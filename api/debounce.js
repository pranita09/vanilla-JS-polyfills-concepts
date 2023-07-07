// Debouncing in JavaScript is a technique that delays the execution of a function until a specific time has passed
// without the function being triggered again. It helps prevent multiple rapid function calls and improves performance.

// Debounce is an api calling technique when you only want to call an api after a specific
// time interval between two user actions: click of a button, search on an input box , scroll event

const debounce = (fn, delay, ...args) => {
  let timer;
  return function () {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const getData = (str) => {
  console.log("api call", str);
};

const debounceAPICall = debounce(getData, 500, "String");

window.addEventListener("scroll", debounceAPICall); // for scroll event
window.addEventListener("click", debounceAPICall); // for button click
window.addEventListener("keyup", debounceAPICall); // for search
