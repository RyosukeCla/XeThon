import os

class Project:
    def __init__(self, project_path):
        self.root = project_path
        self.conf = project_path+'/.xethon_conf'
        self.src = project_path+'/src'
        self.assets = project_path+'/assets'
        self.modules = project_path+'/python_modules'
        self.build = project_path+'/build'

    def make(self):
        self._make_project_structures()
        self._make_gitignore()

    def _make_project_structures(self):
        os.makedirs(self.root)
        os.mkdir(self.conf)
        os.mkdir(self.src)
        os.mkdir(self.assets)
        os.mkdir(self.modules)
        os.mkdir(self.build)

    def _make_gitignore(self):
        gitignore = '.xethon_conf\nbuild'

        f = open(self.root+'/.gitignore', 'w')
        f.write(gitignore)
        f.close()
