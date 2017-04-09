import json
import sys
import main.compiler.xethon_compiler as xc

if __name__ == '__main__':
    api_file = open('./api.json', 'r')
    api_list = json.load(api_file)
    api_file.close()

    argv = sys.argv

    if argv[1] == api_list['compile']:
        xcom = xc.XethonCompiler()
        xcom.compile()
