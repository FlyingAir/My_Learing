def is_odd(n):
    return n % 2 == 1

List01 = list(filter(is_odd, [1, 2, 4, 5, 6, 9, 10, 15]))
print(List01)

from math import sqrt
from math import floor
#用filter求素数
def is_Prime(n):
	for x in range(2,floor(sqrt(n))+1):
		if(n%x)==0:
			return False
	return True
List01 = list((filter(is_Prime,list(range(2,1000)))))
print(List01)


# 回数是指从左向右读和从右向左读都是一样的数，例如12321，909。请利用filter()滤掉非回数：
def is_palindrome(n):
	if str(n)[::-1]==str(n):
		return True
	else:
		return False

output = filter(is_palindrome, range(1, 1000))
print(list(output))


