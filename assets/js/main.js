"use strict";

// Реализовать функцию конструктор MyArray

// Реализовать следующие методы функции конструктора:
// MyArray.isMyArray(arg);

// Реализовать прототип для создаваемых коллекций, со следующими методами:
// MyArray.prototype.push();
// MyArray.prototype.pop(); // tip: delete
// MyArray.prototype.unshift();
// MyArray.prototype.shift();
// MyArray.prototype.concat();
// MyArray.prototype.reverse();

// // advanced
// MyArray.prototype.forEach();
// MyArray.prototype.map();

class MyArray {
  constructor(...args) {
    this.length = 0;

    for (const item of args) {
      this[this.length++] = item;
    }
  }

  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }

    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return;
    }

    const lastItem = this[this.length - 1];

    delete this[--this.length];

    return lastItem;
  }

  unshift() {
    for (let i = 0; i < this.length; i++) {
      this[arguments.length + i] = this[i];
    }

    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }

    this.length += arguments.length;

    return this.length;
  }

  shift() {
    if (this.length === 0) {
      return;
    }

    const deleteItem = this[0];

    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    }

    delete this[--this.length];

    return deleteItem;
  }

  concat(arrInstance) {
    const result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }

    for (let i = 0; i < arrInstance.length; i++) {
      result.push(arrInstance[i]);
    }

    return result;
  }

  reverse() {
    const copy = Object.assign(new MyArray(), this);

    for (let i = 0; i < this.length; i++) {
      this[i] = copy.pop();
    }

    return this;
  }

  forEach(cb) {
    for (var i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }
  }

  map(cb) {
    const result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      const cbResult = cb(this[i], i, this);

      result.push(cbResult);
    }

    return result;
  }
}

MyArray.isMyArray = (obj) => obj instanceof MyArray;

console.log("isMyArray", MyArray.isMyArray(new MyArray()));
console.log("isMyArray", MyArray.isMyArray(new Array()));

console.log("push", new MyArray([1, 2, 3].push(4, 5, 6, 9)));
console.log("pop", new MyArray([1, 2, 3, "last"].pop()));
console.log("unshift", new MyArray([1, 2, 3].unshift(4, 5, 6, 9)));
console.log("shift", new MyArray(["first", 2, 3].shift()));
console.log("concat", new MyArray([1, 2, 3].concat(4, 5, 6)));
console.log("reverse", new MyArray([1, 2, 3, 4, 5, 6].reverse()));
console.log("forEach", new MyArray([1, 2, 3].forEach((x) => console.log(x))));
console.log("map", new MyArray([1, 2, 3, 4, 5, 6].map((x) => x * 2)));
