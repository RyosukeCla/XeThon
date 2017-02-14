# To generate file name from absolute path
# 
# XeThon
# author RealTwo-Space
# version 0
# created 2017/2/15


# dir : absolute value of tex file
# return : "texfile.dvi"
def dviGenerator (dir):
	l = len(dir.split("/"))
	dvi = dir.split("/")[l - 1]

	if ".tex" in dvi:
		dvi = dvi.replace("tex", "dvi")
	else:
		dvi = "ERROR"

	return dvi

# dir : absolute value of tex file
# return : "texfile.pdf"
def pdfGenerator (dir):
	l = len(dir.split("/"))
	pdf = dir.split("/")[l - 1]

	if ".tex" in pdf:
		pdf = pdf.replace("tex", "pdf")
	else:
		pdf = "ERROR"

	return pdf
