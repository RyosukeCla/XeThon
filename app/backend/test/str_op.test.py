import re

test = """
hello world\<\<<< today >>\> aiueo << a >>
<<<
def aiueo():
  pass
>>>

aeiuo
"""

escaped = re.sub('((\\\<)|(\\\>))+', '@', test)
print(escaped)

print(re.findall('([\\\]<|[\\\]>|\s|<{1, 3}|>{1, 3}|[^<>]+)', test))
print(re.findall('([\\\]<|[\\\]>)', test))

ma = re.search('def', test)

print(ma.group(0))
