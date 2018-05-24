// for (var index = 0; index < arr.length; index++) {
//     if(newArr.indexOf(arr[index])== -1){
//         newArr.push(arr[index]);
//     }
// }
var arr = [1, 2, 3, 4, 3, 2, 1];

var arr = arr.sort();
for (var i = 0; i < arr.length-1; i++) {
    if(arr[i] == arr[i+1]){
        arr.splice(i,1)
    }
}
console.log(arr)
