squares = []
for x in range(5):
     squares.append(lambda n=x: n**2)
print(squares)