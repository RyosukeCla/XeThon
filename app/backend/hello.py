import main.maker.project as pr
import main.compiler.xethon_compiler as xc
import os

tn = xc.Tokenizer([','])
res = tn.tokenize('Hi, I am Hello!')

print(res)
#test = pr.Project('./test')
#test.make()

print("Hi, I am Hello!")

test_str = R"""
<<<
def test():
    return 'f(x) = x^2'

def nest(x):
    return r'\begin{}' + x + '\end{}'
fx = test()
>>>
hello world. <<fx>>
<<<
ts = nest(fx)
>>>

hello world. <<ts>>
"""

tn = xc.Tokenizer(['(\\\\<|\\\\>)', '(<|>)'])
res = tn.tokenize(test_str)

print(res)

xtoke = xc.XethonTokenizer()
res = xtoke.tokenize(test_str)
print(res)

xcom = xc.XethonCompiler()
res = xcom.hage(res)
print(res)

exec(res)
