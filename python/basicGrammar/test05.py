lists = [1, 2, 3, 4, 5, 6, 7, 8]
sums = 0
for i in list(range(101)):
    sums = sums + i
print(sums)

sums2, n = 0, 1
while n < 101:
    sums2 = sums2 + n
    n = n + 1
print(sums2)
arr = range(2, 4)
print(arr[0], arr[1])

# prime num
num = input("please input a num :")
num = int(num)
for i in range(2, num):
    for j in range(2, (i // 2) + 1):
        if i % j == 0:
            print(i, "equals", j, "*", i // j)
            break
    else:
        print(str(i), " is a Prime")

# set
s = set((1, 2, 3))
s.add(4)
print(s)
