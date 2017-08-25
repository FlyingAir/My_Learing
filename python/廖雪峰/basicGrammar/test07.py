def person01(name, age, city):
    print("name", name, "age", age, "city", city)


def person02(name, *nick, city):
    print("name", name, "nick", nick, "city", city)


def person03(name, age, city="shanghai", **kw):
    print("name", name, "age", age, "city", city, kw)


def person04(name, *, age, city):
    print("name", name, "age", age, "city", city)


def person05(name, *nick, **kw):
    print("name", name, "nick", nick, kw)


person02("jay", [1, 2, 3, 4], city="shanghai")
person03("jay", 18, color='black')
person05("jay", (1, 2, 3), color="black", top="180")


# 递归
def fact1(n):
    if n == 1:
        return 1
    else:
        return n * fact1(n - 1)


# 尾递归优化 尾递归是指，在函数返回的时候，调用自身本身，并且，return语句不能包含表达式
def fact(n):
    return fact_iter(n, 1)


def fact_iter(num, product):
    if num == 1:
        return product
    return fact_iter(num - 1, num * product)


# 利用递归函数移动汉诺塔:
def move(n, a, b, c):
    if n == 1:
        print('move', a, '-->', c)
    else:
        move(n-1, a, c, b)
        move(1, a, b, c)
        move(n-1, b, a, c)

move(4, 'A', 'B', 'C')