// Throttling in JavaScript is a technique used to limit the frequency of a
// function being executed during an event.

// Imagine you have a function that gets called repeatedly when a user is scrolling.
// Without throttling, the function may execute rapidly and excessively,
// potentially overwhelming system resources.

// Throttling solves this issue by enforcing a maximum execution rate.
// It allows the function to execute only once within a specified time interval,
// regardless of how many times the event is triggered.

// Throttling helps maintain a controlled pace of function calls,
// preventing performance degradation and ensuring a smoother user experience.

const throttle = (fn, delay, ...args) => {
  let flag = true;

  return function () {
    const context = this;

    fn.apply(context, args);
    flag = false;

    setTimeout(() => {
      flag = true;
    }, delay);
  };
};

const expensiveFunction = (args) => {
  console.log("Expensive function called", args);
};

const betterExpensiveFunction = throttle(expensiveFunction, 500, "args");

window.addEventListener("resize", betterExpensiveFunction); // resizing window event
