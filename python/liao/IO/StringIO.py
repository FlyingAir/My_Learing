from io import StringIO
f = StringIO()
text = f.write('hello')
print(text,f.getvalue())

g = StringIO('Hello!\nHi!\nGoodbye!')
while True:
	s = g.readline()
	if(s == ""):
		break
	print(s.strip())
