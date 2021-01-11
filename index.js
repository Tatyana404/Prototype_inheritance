"use strict";

// Реализовать функцию конструктор MyArray.

// Реализовать следующие методы функции конструктора:
// MyArray.isMyArray(arg);  // подсказка: instanceof

MyArray.isMyArray = function isMyArray(obj) {
  return obj instanceof MyArray;
};

// Реализовать прототип для создаваемых коллекций, со следующими методами:
// MyArray.prototype.push();

function MyArrayProto() {
  this.push = function push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  };

  // MyArray.prototype.pop(); // tip: delete

  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };
  // MyArray.prototype.unshift();

  this.unshift = function unshift() {
    for (let i = 0; i < this.length; i++) {
      this[arguments.length + i] = this[i];
    }
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
    this.length += arguments.length;
    return this.length;
  };

  // MyArray.prototype.shift();

  this.shift = function shift() {
    if (this.length === 0) {
      return;
    }
    const delItem = this[0];
    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    }
    delete this[--this.length];
    return delItem;
  };

  // MyArray.prototype.concat();

  this.concat = function (myArrInstance) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }
    for (let i = 0; i < myArrInstance.length; i++) {
      result.push(myArrInstance[i]);
    }
    return result;
  };

  // MyArray.prototype.reverse();

  this.reverse = function () {
    const copy = Object.assign(new MyArray(), this);
    for (let i = 0; i < this.length; i++) {
      this[i] = copy.pop();
    }
    return this;
  };

  // advanced
  // MyArray.prototype.forEach();
  // MyArray.prototype.map();

  this.map = function (cb) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      const cbResult = cb(this[i], i, this);
      result.push(cbResult);
    }
    return result;
  };
}
