from collections import Iterable

L = list(range(1, 100, 2))
H = L[0:int(len(L) / 2)]
print(H)

d = {"name": "jay", "age": 23, "city": "shanghai"}
for key, value in d.items():
    print(key, value)

print(isinstance('abc', Iterable))

for i, value in enumerate([1, 2, 3, 4]):
    print(i, value)

list01 = [x * x + 1 for x in range(1, 11) if x % 2 == 0]
print(list01)

LL = ['Hello', 'World', 18, 'Apple', None]
print([s.lower() for s in LL if isinstance(s, str)])

