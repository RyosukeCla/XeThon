import subprocess
import tempfile
import os
import shutil

class TypeSet:
    """Class representing a typesetting tex to pdf."""

    # tex file path must be an absolute path
    def __init__(self, latex_command='platex', to_pdf_command='dvipdfmx'):
        self.latex_command = latex_command
        self.to_pdf_command = to_pdf_command

    def typeset(self, tex_file_path, latex_option='', to_pdf_option=''):
        latex = ' '.join([
            self.latex_command,
            latex_option,
            tex_file_path
        ])

        dvi_path = tex_file_path[:-4] + '.dvi'
        to_pdf = ' '.join([
            self.to_pdf_command,
            to_pdf_option,
            dvi_path
        ])

        subprocess.call(latex, shell=True)
        subprocess.call(to_pdf, shell=True)
