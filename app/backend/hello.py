import main.maker.project as pr
import main.compiler.xethon_compiler as xc
import os


test_str = R"""
<<<
def test():
    return 'f(x) = x^2'

def nest(x):
    return r'\begin{}' + x + r'\end{}'
fx = test()
>>>
hello world. <<fx>>
<<<
ts = nest(fx)
>>>

hello world. <<ts>>
"""

test_str += r'"""aiueo"""'

xcom = xc.XethonCompiler()
res = xcom.compile(test_str)

print(res)
