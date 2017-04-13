import json

class ProjectJson:
    def __init__(self):
        pass

    def load(self, json_path):
        json_file = open(json_path, 'r')
        self._load_json(json.load(json_file))
        json_file.close()

    def _load_json(self, json):
        self.tree = json['tree']
        self.project = json['project']

    def json(self):
        pass

class XethonFile:
    def __init__(self):
        self.data = ''
        self.WRAPPER = 'WRAPPER'

    def make(self, dir, project):
        tree = project.tree
        preamble = project.load_preamble()
        postamble = project.load_postamle()
        ordered_files = []
        self._make_ordered_files(tree, ordered_files)

        data = '' + preamble
        for order in ordered_files:
            data += project.load_file(order)
        data += postamble
        return data

    def _make_ordered_files(self, node, ordered_list):
        if (not node.has_key("children") or len(node["children"]) == 0):
            return
        for child in node['children']:
            ordered_list.append(child['module'])
            self._make_ordered_files(child, ordered_list)



"""
  project: "Project Name"
  files: [
    {
      filename: "section 1",
      isSaved: true or false,
      content: "aiueo"
    },
    {
      filename: "section 2",
      isSaved: true or false,
      content: "aiueo"
    },
  ],
  wrapper: {
    isSaved: true or false,
    content: "aiueo"
  },
  tree: {
    module: "Project",
    isSaved: true,
    children: [{
      module: "test",
      isSaved: true,
    }, {
      module: "section 1",
      isSaved: true,
    }],
  },
 """
