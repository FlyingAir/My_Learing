[...new Set([1, "1", 2, 1, 1, 3])]


/**
 * 常规方法
 */
 var arr = [1,2,3,4,12,"12",1,"12"]
 var newArr = [];
 arr.forEach( function(element, index) {
 	if(newArr.indexOf(element) == -1){
 		newArr.push(element)
 	}
 });
 console.log(newArr)