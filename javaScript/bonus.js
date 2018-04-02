
var arg = [[1.75], [1.75], [1.81], [1.81], [1.68],[1.41],[1.75]];
var a = doXINX(2, ...arg);
var b = doXINX(4, ...arg);
var c = doXINX(6, ...arg);
console.log('a:'+a +'b:'+b+"c:"+c)
console.log((a+b+c)*4) 

/**
 * 计算总利率 ( N in 1 )
 * @param arguments  不同长度的数组
 * @example doXInOne([1,2,3],[3,5])
 * @return {[Number]} [总利率]
 */
function doXInOne(...arguments) {
    if (arguments.length == 1) {
        var arr = [];
        var temp = arguments[0];

        for (var key in temp) {
            arr[key] = temp[key]
        }
        arguments = arr;
    }


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
    console.log
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
function doXINX(x, ...arg) {
    var total = 0;
    for (var key in getIndexXINX(x, ...arg)) {
        // console.log(getIndexXINX(x, ...arg)[key])
        total += doXInOne(getIndexXINX(x, ...arg)[key])
    }
    console.log("total=" + total)
    return total;
}


/**
 * 
 * 计算 M in N 组合
 * @param  {[type]} x [description]
 * @return {[type]}   [description]
 */
function getIndexXINX(n, ...arg) {
    var argu = [].splice.call(arguments, (0, 1));
    var m = argu.length;
    if(!n || n < 1) {
        return [];
    }
 
    var resultArrs = [],
        flagArr = [],
        isEnd = false,
        i, j, leftCnt;
 
    for (i = 0; i < m; i++) {
        flagArr[i] = i < n ? 1 : 0;
    }
 
    resultArrs.push(flagArr.concat());
 
    while (!isEnd) {
        leftCnt = 0;
        for (i = 0; i < m - 1; i++) {
            if (flagArr[i] == 1 && flagArr[i+1] == 0) {
                for(j = 0; j < i; j++) {
                    flagArr[j] = j < leftCnt ? 1 : 0;
                }
                flagArr[i] = 0;
                flagArr[i+1] = 1;
                var aTmp = flagArr.concat();
                resultArrs.push(aTmp);
                if(aTmp.slice(-n).join("").indexOf('0') == -1) {
                    isEnd = true;
                }
                break;
            }
            flagArr[i] == 1 && leftCnt++;
        }
    }
    var all = {};
    resultArrs.forEach(function(ele,ind){
            all[ind] = ele;
    })
    var content = {};

    for (var key in all) {
        var tempObj = {};
        var i = 0;
        all[key].forEach(function(ele, ind) {
            if (ele == 1) {
                tempObj[i] = argu[ind];
                i++;
            }
        })
        content[key] = tempObj
    }
    console.log(content)
    return content
}