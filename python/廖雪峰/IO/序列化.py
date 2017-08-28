import pickle
d = dict(name='Bob',age=20,store=88)
s = pickle.dumps(d)
print(s)

f=open('file/dump.txt','wb')
pickle.dump(d,f)
f.close()

f=open('file/dump.txt','rb')
d=pickle.load(f)
f.close()
print(d)