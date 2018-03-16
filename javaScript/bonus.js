/**
 * 计算总利率 ( N in 1 )
 * @param arguments  不同长度的数组
 * @example doXInOne([1,2,3],[3,5])
 * @return {[Number]} [总利率]
 */

// doXInOne([1,2],[3,4],[1,5])

// doXINX(2,[2.6,1.75],[2.08],[1.75,4],[1.81,1.8])
// doXInOne([2.6,1.75],[2.08],[1.75,4],[1.81,1.8])

function doXInOne(...arguments) {
    if(arguments.length==1){
        var arr = [];
        var temp =arguments[0];

        for(var key in temp) {
            arr[key] = temp[key]
        } 
        arguments =arr;
    }

    // console.log(arguments)

    //传入数组个数
    var length = arguments.length;
    //存储每个数组最大索引
    var maxIndexesArr = new Array(length);
    for (var i = 0; i < length; i++) {
        maxIndexesArr[i] = arguments[i].length - 1;
    }
    //将每个数组索引初始化为0
    var indexArr = new Array(length);
    for (var i = 0; i < length; i++) {
        indexArr[i] = 0;
    }
    var combination = {};
    //计算总组合数
    var totalCombination = getTotlalCombination(arguments);

    for (var i = 0; i < totalCombination; i++) {
        var nowValue = getNowValue(indexArr, arguments);
        combination[i] = nowValue;
        indexArr = getNext(indexArr, maxIndexesArr);
    }
    console.log("rate = " + caculate(combination))
    return caculate(combination);
}

/**
 * 计算总组合数
 * [getTotlalCombination description]
 * @return {[type]} [description]
 */
function getTotlalCombination() {
    var argu = arguments[0];
    var total = 1;
    for (var i = 0; i < argu.length; i++) {
        total *= argu[i].length;
    }
    return total;
}

/**
 * 获取当前索引数据
 * @param {[arr]} [indexArr] [当前所有数组下标]
 * @return {[type]} [description]
 */
function getNowValue(indexArr) {
    var res = [];
    var argu = [].splice.call(arguments, (0, 1))[0];
    for (var i = 0; i < indexArr.length; i++) {
        var thisIndex = indexArr[i];
        res[i] = argu[i][thisIndex]
    }
    return res
}

/**
 * 获取下一次的索引
 * @return {[type]} [description]
 */
function getNext(indexArr, maxIndexesArr) {
    for (var i = 0; i < indexArr.length; i++) {
        if (indexArr[i] + 1 > maxIndexesArr[i]) {
            indexArr[i] = 0;
            continue;
        } else {
            indexArr[i] += 1;
            break;
        }
    }
    return indexArr;
}

/**
 * 计算总和
 * [caculate description]
 * @return {[type]} [description]
 */
function caculate(combination) {
    var count = 0;
    for (var ind in combination) {
        var t = 1;
        for (var i = 0; i < combination[ind].length; i++) {
            t = t * combination[ind][i];
        }
        count += t
    }
    return count;
}

/**
 * 计算总利率 ( N in n ) n < N
 * @param arguments  不同长度的数组
 * @example doXInOne([1,2,3],[3,5])
 * @return {[Number]} [总利率]
 */
function doXINX(x,...arg) {
    var total =0;
    for(var key in getIndexXINX(x,...arg)){
       

        total+=doXInOne(getIndexXINX(x,...arg)[key])
    }
    console.log("total="+total)
}


/**
 * 计算 M in N 组合
 * @param  {[type]} x [description]
 * @return {[type]}   [description]
 */
function getIndexXINX(x,...arg) {
    // console.log(arguments)
    var argu = [].splice.call(arguments, (0, 1));
    var length = argu.length;
    var ind = 0;
    var all = {};
    var indexInit = new Array(length);
    for (var i = 0; i < length; i++) {
        if (i < x) {
            indexInit[i] = 1;

        } else {
            indexInit[i] = 0;
        }
    }

    for (var i = x; i > 0; i--) {
        var index = i;
        for (var j = 0; j < length - x; j++) {
            var _testCopy = [].concat(indexInit);
            all[ind] = _testCopy;
            indexInit[index - 1] = 0;
            indexInit[index] = 1;
            index++;
            ind++; // console.log(indexInit)
            if(i==1 && j==length-x-1){
                var _testCopy = [].concat(indexInit);
                all[ind] = _testCopy;
            }    
        }

    }
    
    var content = {};

    for (var key in all){
        var tempObj= {};
        var i =0;
        all[key].forEach(function(ele,ind){
            if(ele == 1){
                tempObj[i] = argu[ind];
                i++;
            }
        })  
        content[key]=tempObj
    }

    return  content
}


// getIndexXINX(3, [1], [2], [3], [4], [5])
// doXInOne([2.6,1.75],[2.08,5.2],[1.75,4],[1.81,1.8])