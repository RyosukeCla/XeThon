import compiler.project as pr
import compiler.xethon_compiler as xc
import compiler.xethon_file as xf
import typeset.typeset as tp
import subprocess

class Xethon:
    def __init__(self):
        self.xethon_file = xf.XethonFile()
        self.project = None

    def load(self, project_path):
        self.project = pr.Project(project_path)
        self.project.load()

    def make(self, project_path):
        self.project = pr.Project(project_path)
        self.project.make()

    def compile(self):
        xethon_data = self.xethon_file.make(self.project.src, self.project)
        xcom = xc.XethonCompiler()
        compiled = xcom.compile(xethon_data)
        return compiled

    def typeset(self):
        tex = '' + self.compile()
        tex_path = self.project.build_data("build.tex", tex)
        typeset = tp.TypeSet()
        typeset.typeset(
            tex_file_path=tex_path,
            latex_option='-output-directory={0}'.format(self.project.build),
            to_pdf_option='-o {0}/{1}'.format(self.project.build, 'build.pdf')
        )
    def open_pdf(self):
        open_command = ' '.join([
            'open',
            self.project.build + '/build.pdf'
        ])
        subprocess.call(open_command,shell=True)
