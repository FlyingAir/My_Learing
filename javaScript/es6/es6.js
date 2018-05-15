// 箭头函数
// sayHello = name => console.log('hello',name);
// setTimeout(()=>console.log('Loaded'));
// list.forEach(element => {
//     console.log(element)
// });

// 隐式返回值
// calc = diameter => {Math.PI * diameter}

// 模板字符串
// const welcome = `You have logged in as ${first} ${last}`;
// const db =`http://${host}:${post}/${database}`;

// class
class Animal {
    constructor(name){
        this.name = name+'1';
    }
    eat(){
        console.log(`${this.name} eat`)
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
        this.name = name;
    }
    say(){
        console.log(`${this.name} say`)
    }
}
const dog =new Dog('二哈')
dog.say();
dog.eat();

// set Map
const set = new Set([1,2,3,4,5,2])
console.log(set);

const set1 = new Set();
[2,3,4,5,5,6,1].forEach(item => set1.add(item));
for (let item of set1 ){
    console.log(item);
}
console.log(set1.size)





// 快速排序
function quickSort(arr){
    if(arr.length<=1){
        return arr
    }
    let index = Math.floor(arr.length/2);
    let current = arr.splice(index,1)[0];
    let left = [];
    let right = [];
    for (let item of arr){
        if(item<current){
            left.push(item);
        }else{
            right.push(item);
        }
    }
    return quickSort(left).concat([current].concat(right));
}
console.log(quickSort([32,4,6,7,3,7,9,34]))