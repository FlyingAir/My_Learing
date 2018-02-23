# -*- coding: utf-8 -*-
print(True and False)
print(True and True)
print(False and False)
print(False and False)
print(True or False)
print(True or True)
print(False or False)
print(not 3 > 2)
print(3/2)
# and 找假
# or 找真
# 短路运算
print("a" and "b")
print("" and "b")
print("a" or "b")
print("" or "b")

a = 9
print(a//2)
# print('\u4e2d\u6587')
b = "flyingAir"
print(b.encode("utf-8"))
print("%s+%d" % ("jay", 100))

# 小明的成绩从去年的72分提升到了今年的85分，请计算小明成绩提升的百分点，并用字符串格式化显示出'xx.x%'，只保留小数点后1位：
s1 = 72
s2 = 85
print("%.1f %%" % ((s2-s1)/s2*100))
