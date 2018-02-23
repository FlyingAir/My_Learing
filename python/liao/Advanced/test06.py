def build_person(first_name,last_name,age):
    '''返回一个字典，其中包含有关一个人的信息'''
    if age:
        person = {"first": first_name, "last": last_name,"aeg":age}
    else:
        person = {"first":first_name,"last":last_name}
    return person
print(build_person("jay","zhu","17"))