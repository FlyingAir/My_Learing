//赋值运算符不会创建一个对象的副本，它只分配一个引用
let obj = {
  a: 1,
  b: 2,
};
let copy = obj;
 
obj.a = 5;
console.log(copy.a);
// 结果 
// copy.a = 5;
// 
// 
// 
// 复制对象的原始方式
function copy(mainObj) {
  let objCopy = {}; // objCopy 将存储 mainObj 的副本
  let key;
 
  for (key in mainObj) {
    objCopy[key] = mainObj[key]; // 将每个属性复制到objCopy对象
  }
  return objCopy;
}
 
const mainObj = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
}
 
console.log(copy(mainObj));
//1. objCopy 对象具有一个新的 Object.prototype方法，这与 mainObj 对象的原型方法不同
//2. 属性描述符不能被复制。值为 false 的 “可写(writable)” 描述符在 objCopy 对象中为 true 
//3. 只复制了 mainObj 的可枚举属性。
//
var o = {}; // Creates a new object 
 
Object.defineProperty(o, 'a', {
  value: 37,
  writable: false
});
 
console.log(o.a); // logs 37
o.a = 25; // No error thrown
// (it would throw in strict mode,
// even if the value had been the same)
console.log(o.a); // logs 37. The assignment didn't work.
 
// strict mode
(function() {
  'use strict';
  var o = {};
  Object.defineProperty(o, 'b', {
    value: 2,
    writable: false
  });
  o.b = 3; // throws TypeError: "b" is read-only
  return o.b; // returns 2 without the line above
}());



/**
 * 浅拷贝对象
 */
let obj = {
  a: 1,
  b: 2,
};
let objCopy = Object.assign({}, obj);
console.log(objCopy);
// Result - { a: 1, b: 2 }