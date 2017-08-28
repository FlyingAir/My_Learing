# f = open("file/hello.txt",'w')
# f.write("yo yo check now")
# f.close()


with open('file/hello.txt','w') as f:
    f.write('Hello, world!')