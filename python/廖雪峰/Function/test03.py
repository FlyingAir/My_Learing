# 利用map()函数，把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。输入：['adam', 'LISA', 'barT']，输出：['Adam', 'Lisa', 'Bart']
def normalize(name):
	return name.lower().title()
List01 = ['adam', 'LISA', 'barT']
List02 = list(map(normalize,List01))
print(List02)

# Python提供的sum()函数可以接受一个list并求和，请编写一个prod()函数，可以接受一个list并利用reduce()求积
from functools import reduce
def prod(L):
	return reduce(lambda x,y: x*y ,L)
print(prod([1,2,3,4,5]))

# 利用map和reduce编写一个str2float函数，把字符串'123.456'转换成浮点数123.456：
from functools import reduce
def str2float(s):
    def str2num(sr):
        return {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}[sr]

    def add2(x, y):
        return x*10 + y
    # 切割整数和小数部分
    sp = s.split('.')
    print(sp)
    # 先计算整数部分
    fr = reduce(add2, map(str2num, sp[0]))
    fr2 = 0
    if '.' in s:
        # 再计算小数部分
        fr2 = reduce(add2, map(str2num, sp[1]))
        fr2 = fr2 / (10 ** len(sp[1]))
    # 最后相加返回
    return fr + fr2
print('str2float(\'123.456\') =', str2float('123.456'), type(str2float('123.456')))

