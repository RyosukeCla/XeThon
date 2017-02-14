import sys
import os
import tempfile

sys.path.append("../..")
from system.typeset import typeset

def texConvertTest ():
	tex = "/Users/ev50061/Desktop/XeThon/XeThon/app/backend/test/tex/hello.tex"

	print "Current Directory is " + os.getcwd()
	os.chdir("../output")
	t = typeset.TypeSet(tex)
	t.convertToPDF()

def arbitraryConvertTest ():
	tex = "/Users/ev50061/Desktop/XeThon/XeThon/app/backend/test/tex/hello.tex"
	dvi = "/Users/ev50061/Desktop/XeThon/XeThon/app/backend/test/tex"
	pdf = "/Users/ev50061/Desktop/XeThon/XeThon/app/backend/test/output"

	t = typeset.TypeSet(tex)
	t.arbitraryDviPdfPlacer(dvi, pdf)

def tempConvertTest ():
	tex = "/Users/ev50061/Desktop/XeThon/XeThon/app/backend/test/tex/hello.tex"
	pdf = "/Users/ev50061/Desktop/XeThon/XeThon/app/backend/test/output"
	t = typeset.TypeSet(tex)
	t.tempFolderPlacer(pdf)

if __name__ == "__main__":
	#texConvertTest()
	#arbitraryConvertTest()
	tempConvertTest()