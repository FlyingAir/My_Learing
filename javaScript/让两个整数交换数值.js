/**
 * 常规方法
 */
var a=1,b=2;
a += b;
b = a - b;
a -= b;

/**
 * 黑科技
 */
a ^= b;
b ^= a;
a ^= b;

/**
 * ES6
 */
let a = 1, b = 2;
[a, b] = [b, a];