var a = b && 1
    // 相当于
if (b) {
    a = 1
} else {
    a = b
}

var a = b || 1
    // 相当于
if (b) {
    a = b
} else {
    a = 1
}