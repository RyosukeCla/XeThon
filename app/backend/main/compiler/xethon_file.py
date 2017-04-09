import json

class XethonFile:
    def __init__(self):
        self.data = ''
        self.WRAPPER = 'WRAPPER'

    def save_files(self, dir, files):
        for file_data in files:
            f = open('{0}/%{1}.xethon'.format(dir, file_data['module']), 'w')
            f.write(file_data['content'])
            f.close()

    def _save_wrapper(self, dir, preamble, postamble):
        self._save_special(dir, 'preamble', preamble)
        self._save_special(dir, 'postamble', postamble)

    def _save_special(self, dir, special, content):
        f = open('{0}/@{1}.xethon'.format(dir, special), 'w')
        f.write(content)
        f.close()

    # TODO: データのロードを実装すること
    def load():
        pass

    def make(self, dir, data):
        tree = data['tree']
        preamble = data['preamble']
        postamble = data['postamble']
        ordered_files = []
        self.make_ordered_files(tree, ordered_files)

        data = preamble
        for order in ordered_files:
            f = open('{0}/%{1}.xethon'.format(dir, order), 'w')
            data += f.read()
            f.close()
        data += postamble
        return data

    def _make_ordered_files(self, node, ordered_list):
        if (node['children'] == None || len(node.children) == 0):
            pass
        for child in node['children']:
            ordered_list.append(child['module'])
            self.make_ordered_files(child, ordered_list)



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
