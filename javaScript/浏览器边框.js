[].forEach.call($$("*"),function(a){
    a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)
})

/**
 * 给所有dom添加随机边框
 */

Array.prototype.forEach.call(document.querySelectorAll('*'), 
dom => dom.style.outline = `1px solid #${parseInt(Math.random() * 
Math.pow(2,24)).toString(16)}`)