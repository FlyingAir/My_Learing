# -*- coding: utf-8 -*-
# @Author: FlyingAir
# @Date:   2017-08-07 23:22:19
# @Last Modified by:   FlyingAir
# @Last Modified time: 2017-08-13 14:45:57
# 1
print( [value for value in range(1,21)])
# 2
for value in[value for value in range(1,100001)]:
  print(value)
# 3
print(sum([value for value in range(1,1000001)]))
# 4
print([value for value in range(3,30,3)])
# 5
for value in [value**3 for value in range(1,11)]:
  print(value)