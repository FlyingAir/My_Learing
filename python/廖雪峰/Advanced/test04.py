# -*- coding: utf-8 -*-
# @Author: FlyingAir
# @Date:   2017-08-13 13:48:04
# @Last Modified by:   FlyingAir
# @Last Modified time: 2017-08-13 14:01:04
for x in range(1,10):
  if x % 2 ==0:
    continue
  print(x)


responses ={}
polling_active = True
while polling_active:
  #提示输入被调查者的名字和回答
  name = input("\n what is your name?")
  responses = input("which moutain would you like to climb someday")
  #将答案存储在字典中
  responses[name]= responses

  #看看是否还有别人要参与调查
  repeat = input("would you like to let anther person respond?(yes/no)")
  if repeat == 'no':
    polling_active=False
  print("\n--- poll results---")

  for name,response in responses.items():
    print(name +'would you like to climb'+response +".")
