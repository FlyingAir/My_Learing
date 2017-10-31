f = open('text.txt','w')
for i in range(1,2400):
	f.write(str(i))
	f.write("\n")
f.close()