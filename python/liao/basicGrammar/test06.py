arr = [1, 2, 3, 4, 5, 6]
print(max(arr))
print(hex(16))


def is_prime(x):
    for i in range(2, (x // 2) + 1):
        if x % i == 0:
            print(int(x), 'is not a prime')
            return False
    else:
        print(int(x), 'is a prime')
        return True


result = is_prime(3)
print(result)


def power(x, n=2):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s


print(power(3))
print(power(3, 3))


def calc(*num):
    sums = 0
    for i in num:
        sums = sums + i
    return sums


print(calc(1, 2, 3, 4, 5, 6))


def person(city, name, age="12", **kw):
    print(city, name, age, kw)


person("shanghai", "jay", color="black")
