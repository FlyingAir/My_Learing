import os
# print(os.name)
# print(os.environ)
# print(os.environ.get('PATh'))

# 查看当前目录的绝对路径:
# print(os.path.abspath('.'))

# 在某个目录下创建一个新目录，首先把新目录的完整路径表示出来:
print(os.path.join('file/test/', 'testdir'))

# 然后创建一个目录:
# os.mkdir('file/test/')
# 删掉一个目录:
# os.rmdir('file/test/')