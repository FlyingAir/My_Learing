def f(x):
	return x*x
a=map(f,[1,2,3,4,5,6,7,8,9,10])
print(list(a))

from functools import reduce
def add(x,y):
	return x+y
a=reduce(add,[1,2,3,4,5])
print(a)