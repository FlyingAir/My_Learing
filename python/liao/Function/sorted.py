sorted(['bob', 'about', 'Zoo', 'Credit'])
# ['Credit', 'Zoo', 'about', 'bob']
# 默认情况下，对字符串排序，是按照ASCII的大小比较的，由于'Z' < 'a'，结果，大写字母Z会排在小写字母a的前面
# 
sorted(['bob', 'about', 'Zoo', 'Credit'], key=str.lower, reverse=True)
# 反向排序



#  按名字排序
#  按成绩从高到低排序
L = [('Bob', 75), ('Adam', 92), ('Bart', 66), ('Lisa', 88)]
def by_name(t):
	return t[0]
def by_great(g):
	return g[1]
L2 = sorted(L, key=by_name)
L3 = sorted(L, key=by_great,reverse = True)
print(L2)
print(L3)