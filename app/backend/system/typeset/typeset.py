# For creating a dvi, aux, ... files from a given tex file,
# and converting it to pdf file
# 
# XeThon
# author RealTwo-Space
# version 0
# created 2017/2/14

import subprocess
import tempfile
import os
import namegen
import shutil

class TypeSet:
	# tex file dir must be an absolute path
	def __init__(self, texFileDir):
		self.dvi = namegen.dviGenerator(texFileDir)
		self.pdf = namegen.pdfGenerator(texFileDir)
		self.platex = ["platex", texFileDir]
		self.pdfConverter = ["dvipdfmx", self.dvi]
		"""
		print self.platex
		print self.pdfConverter
		print "Constructed"
		"""

	# tex -> dvi -> pdf
	def convertToPDF (self):
		dviCreation = subprocess.Popen(self.platex, stdout = subprocess.PIPE)
		pdfCreation = subprocess.Popen(self.pdfConverter, stdin = dviCreation.stdout)
		dviCreation.stdout.close()
		pdfCreation.communicate()[0]

	# dviDir : create dvi, aux, ... here
	# pdfDir : create pdf here
	def arbitraryDviPdfPlacer (self, dviDir, pdfDir):
		os.chdir(dviDir)
		self.convertToPDF()
		os.remove(pdfDir + "/" + self.pdf)
		shutil.move(self.pdf, pdfDir)

	# pdfDir : create pdf here
	# 
	# create aux, dvi, ... in temp folder
	# that will be removed
	def tempFolderPlacer (self, pdfDir):
		tempDirectory = tempfile.mkdtemp()
		self.arbitraryDviPdfPlacer(tempDirectory, pdfDir)
		shutil.rmtree(tempDirectory)

