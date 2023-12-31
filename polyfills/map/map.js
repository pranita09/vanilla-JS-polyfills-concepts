//Map

const arr = [1, 2, 3, 4, 5];

const squaredArr = (arr) => arr.map((num) => num * num);

// custom Map

const mapPolyfill = (arr, cb) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]));
  }
  return newArr;
};

const square = (x) => x * x;

console.log(mapPolyfill(arr, square));

// using Array.prototype

Array.prototype.myMap = function (cb) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;
};

console.log(arr.myMap((num, i, arr) => num * num));
