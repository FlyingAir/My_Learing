def calc_prod(lst):
	def fn():
		return reduce((lambda x,y: x*y),lst)
	return fn
f1 = calc_prod([1, 2, 3, 4])
print( f1() )