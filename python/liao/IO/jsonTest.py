import json
d = dict(name='Bob',age=20,store=88)
j=json.dumps(d)
print(j)


json_str='{"age": 20, "score": 88, "name": "Bob"}'
j = json.loads(json_str)
print(j)