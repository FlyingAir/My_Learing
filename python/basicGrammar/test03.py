classmates = ['jay', 'fay', 'me']
print(classmates)
print(len(classmates))
print("1:"+classmates[0]+"\n2:"+classmates[1]+"\n3:"+classmates[2])
text = ('Put several strings within parentheses '
        'to have them joined together.')
print(text[:3])
print(text[4:])
print(text[1:3])
# 负数：-1 从倒数第一个开始
print(classmates[-1]+classmates[-2])
classmates.append("MJ")
classmates.insert(0, "aaa")
classmates.pop()
classmates.pop(2)
print(classmates)
t = (1, 2, 3)
print(t)
d = (1,)
print(d)
# Fibonacci series:
a, b = 0, 1
while b < 1000:
    print(b, end=',')
    a, b = b, b+a

L = [
    ['Apple', 'Google', 'Microsoft'],
    ['Java', 'Python', 'Ruby', 'PHP'],
    ['Adam', 'Bart', 'Lisa']
]
print(L[0][0])
print(L[1][1])
print(L[2][2])


# tuple一开始指向的list并没有改成别的list，所以，tuple所谓的“不变”是说，
# tuple的每个元素，指向永远不变。即指向'a'，就不能改成指向'b'，指向一个list，
# 就不能改成指向其他对象，但指向的这个list本身是可变的！
t=("a","b",["c","d"])
t[2][0]="e"
print(t)
