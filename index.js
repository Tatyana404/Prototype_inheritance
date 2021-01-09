"use strict";

// Реализовать функцию конструктор MyArray.

// Реализовать следующие методы функции конструктора:
// MyArray.isMyArray(arg);  // подсказка: instanceof

function MyArray() {
  this.length = 0;
  this.isMyArray = function (arg) {
    return arg instanceof MyArray;
  };
}

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

  this.concat = function (arg) {
    let newArg = [];
    for (let i = 0; i < this.length; i++) {
      newArg[i] = this[i];
    }
    for (let i = 0; i < arg.length; i++) {
      newArg[this.length++] = arg[i];
    }
    return newArg;
  };

  // MyArray.prototype.reverse();

  this.reverse = function reverse() {
    for (let i = 0; i < this.length / 2; i++) {
      const reverseItem = this[this.length - 1 - i];
      this[this.length - 1 - i] = this[i];
      this[i] = reverseItem;
    }
    return this;
  };
}

// advanced
// MyArray.prototype.forEach();
// MyArray.prototype.map();
