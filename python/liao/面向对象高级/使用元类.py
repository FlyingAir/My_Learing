class Hello(object):
    def hello(self, name="world"):
        print("hello, %s" % name)


h = Hello()
h.hello()
h.hello('Jay')
print(type(Hello))
print(type(h))


def fn(self, name='world'):  # 先定义函数
    print('Hello, %s.' % name)


Jay = type('Jay', (object,), dict(jay=fn))  # 创建Hello class
j = Jay()
j.jay()
j.jay("jay")
print(type(j))
