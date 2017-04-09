import re
import StringIO
import subprocess
import sys

from cStringIO import StringIO

test_str = """
hello world\<\<<< today >>\> aiueo << a >>

<<<
def aiueo():
  pass
>>>

aeiuo
"""
print("aosdifuaoisjdfoiaj")
test_2 = """
def py():
    pass
"""

py = """
def python():
    print("aiueo")

python()
kokoko = 'python()'
"""

old_stdout = sys.stdout
redirected_output = sys.stdout = StringIO()
exec(py)
sys.stdout = old_stdout

tes = redirected_output.getvalue()
print(tes, "aiueo")
print(kokoko)
