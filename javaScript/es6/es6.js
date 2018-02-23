// 箭头函数
sayHello = name => console.log('hello',name);
setTimeout(()=>console.log('Loaded'));
list.forEach(element => {
    console.log(element)
});

// 隐式返回值
calc = diameter => {Math.PI * diameter}

// 模板字符串
const welcome = `You have logged in as ${first} ${last}`;
const db =`http://${host}:${post}/${database}`;