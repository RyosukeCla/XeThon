import subprocess
import tempfile
import os
import shutil

class TypeSet:
    """Class representing a typesetting tex to pdf."""

    # tex file path must be an absolute path
    def __init__(self, latex_command='platex', to_pdf_command='dvipdfmx', texhon_file_path):
        self.latex_command = latex_command
        self.to_pdf_command = to_pdf_command
        self.tex_file_path = tex_file_path

        """
        print self.platex
        print self.pdfConverter
        print "Constructed"
        """

    def xethon_to_tex(self):


    # tex -> dvi -> pdf
    def convert_to_PDF (self):
        dviCreation = subprocess.Popen(self.platex, stdout = subprocess.PIPE)
        pdfCreation = subprocess.Popen(self.pdfConverter, stdin = dviCreation.stdout)
        dviCreation.stdout.close()
        pdfCreation.communicate()[0]

    # dviDir : create dvi, aux, ... here
    # pdfDir : create pdf here
    def arbitrary_dvi_pdf_placer (self, dviDir, pdfDir):
        os.chdir(dviDir)
        self.convertToPDF()
        os.remove(pdfDir + "/" + self.pdf)
        shutil.move(self.pdf, pdfDir)

    # pdfDir : create pdf here
    #
    # create aux, dvi, ... in temp folder
    # that will be removed
    def temp_folder_placer (self, pdfDir):
        tempDirectory = tempfile.mkdtemp()
        self.arbitraryDviPdfPlacer(tempDirectory, pdfDir)
        shutil.rmtree(tempDirectory)
