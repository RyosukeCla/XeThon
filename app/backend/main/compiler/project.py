import os
import json

class Project:
    def __init__(self, project_path):
        self.root = project_path
        self.conf = project_path+'/.xethon_conf'
        self.src = project_path+'/src'
        self.assets = project_path+'/assets'
        self.modules = project_path+'/python_modules'
        self.build = project_path+'/build'

    def load(self):
        json_file = open(self.src+'/project.json', 'r')
        self._load_json(json.load(json_file))
        json_file.close()

    def load_file(self, filename):
        f = open('{0}/%{1}.xethon'.format(self.src, filename), 'r')
        data = f.read()
        f.close()
        return data

    def load_preamble(self):
        f = open('{0}/@{1}.xethon'.format(self.src, "preamble"), 'r')
        data = f.read()
        f.close()
        return data

    def load_postamle(self):
        f = open('{0}/@{1}.xethon'.format(self.src, "postamble"), 'r')
        data = f.read()
        f.close()
        return data

    def _load_json(self, json):
        self.tree = json['tree']
        self.project = json['project']

    def build_data(self, filename, data):
        path = '{0}/{1}'.format(self.build, filename)
        f = open(path, 'w')
        f.write(data)
        f.close()
        return path

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
        gitignore = '.xethon_conf'

        f = open(self.root+'/.gitignore', 'w')
        f.write(gitignore)
        f.close()
