from io import BytesIO
f = BytesIO()
text = f.write('中文'.encode('utf-8'))
print(text)
