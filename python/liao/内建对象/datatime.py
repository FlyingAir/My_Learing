from datetime import datetime
now = datetime.now()   # 获取当前datetime
print(now)
print(type(now))


dt = datetime(2015, 4, 19, 12, 20,40)  # 用指定日期时间创建datetime
print(dt)

dt = datetime(2015, 4, 19, 12, 20) # 用指定日期时间创建datetime

print(dt.timestamp())   # 把datetime转换为timestamp  timestamp是一个浮点数

t = 1429417200.0
print(datetime.fromtimestamp(t))

t = 1429417200.0
print(datetime.fromtimestamp(t)) # 本地时间

print(datetime.utcfromtimestamp(t)) # UTC时间


cDay = datetime.strptime('2015-6-1 18:19:59', '%Y-%m-%d %H:%M:%S')
print(cDay)

now = datetime.now()
print(now.strftime('%a, %b %d %H:%M'))