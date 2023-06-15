// Filter

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evens = (arr) => arr.filter((num) => num % 2 === 0);

// custom Filter

const filterPolyfill = (arr, cb) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb([arr[i]]) === true) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const isEven = (num) => num % 2 === 0;

console.log(filterPolyfill(arr, isEven));

// using Array.prototype

Array.prototype.myFilter = function (cb) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb([this[i]], i, this)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(arr.myFilter((num, i, arr) => num % 2 === 0));
