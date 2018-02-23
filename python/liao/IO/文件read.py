# 读文件
f = open('file/hello.txt', 'r')
for line in f.readlines():
    print(line.strip()) # 把末尾的'\n'删掉
f.close()


with open('file/hello.txt','r') as f:
	print(f.read())


# 二进制文件
f = open('pics/不染.jpg','rb')
text = f.read()
print(text)



# f = open('/Users/michael/gbk.txt', 'r', encoding='gbk', errors='ignore')