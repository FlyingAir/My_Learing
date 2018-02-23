# -*- coding: utf-8 -*-
# @Author: FlyingAir
# @Date:   2017-08-13 13:25:12
# @Last Modified by:   FlyingAir
# @Last Modified time: 2017-08-13 13:45:54
current_number = 1
while current_number <= 5:
  print(current_number)
  current_number+=1


prompt = "\n tell me something ,and i will repeat it back to you!"
prompt += "\n enter 'quit' to end the program!"
message = ""
while message != "quit":
  message = input(prompt)

  if message != "quit":
    print(message)