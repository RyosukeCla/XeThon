import re
import sys
from cStringIO import StringIO

class XethonCompiler:
    def __init__(self):
        self.tokenizer = XethonTokenizer()

    def compile(self, str_val):
        tokens = self.tokenizer.tokenize(str_val)
        res = ''

        for token in tokens:
            old_stdout = sys.stdout
            redirected_output = sys.stdout = StringIO()
            if token['mode'] == self.tokenizer.TEX:
                res += token['data']
            elif token['mode'] == self.tokenizer.INLINE:
                exec("print('$' + {0} + '$')".format(token['data']))
                res += redirected_output.getvalue()
            elif token['mode'] == self.tokenizer.PYTHON:
                exec(token['data'])
                res += redirected_output.getvalue()
            sys.stdout = old_stdout
        return res

    def batch_xethon(self, xethon):

        pass


class XethonTokenizer:

    def __init__(self):
        self.tokenizer = Tokenizer(['(\\\\<|\\\\>)', '(<|>)', '"'])
        self.INLINE = 'INLINE'
        self.PYTHON = 'PYTHON'
        self.TEX = 'TEX'
        pass

    def tokenize(self, str_val):
        tokens = self.pre_tokenize(str_val)
        is_inline_mode = False
        is_python_mode = False
        res = [{'mode':self.TEX, 'data':''}]
        for token in tokens:
            if token == '<<':
                is_inline_mode = True
                res.append({'mode':self.INLINE, 'data':''})
            elif token == '>>':
                is_inline_mode = False
            elif token == '<<<':
                res.append({'mode':self.PYTHON, 'data':''})
                is_python_mode = True
            elif token == '>>>':
                is_python_mode = False
            else:
                if is_inline_mode:
                    res[-1]['data'] += token
                elif is_python_mode:
                    res[-1]['data'] += token
                else:
                    temp = token
                    if temp == '"':
                        temp = '\"'
                    if res[-1]['mode'] == self.TEX:
                        res[-1]['data'] += temp
                    else:
                        res.append({'mode':self.TEX, 'data':temp})

        return res


    def pre_tokenize(self, str_val):
        pre_tokens = self.tokenizer.tokenize(str_val)
        res = ['']
        is_begin_delimiter_char = False
        is_end_delimiter_char = False
        for token in pre_tokens:

            if token == '<' and is_begin_delimiter_char:
                res[-1] = res[-1] + token
            elif token == '>' and is_end_delimiter_char:
                res[-1] = res[-1] + token
            elif token == '\\>':
                res.append('>')
            elif token == '\\<':
                res.append('<')
            else:
                res.append(token)

            is_begin_delimiter_char = False
            is_end_delimiter_char = False

            if token == '<':
                is_begin_delimiter_char = True
            elif token == '>':
                is_end_delimiter_char = True

        return res

class Tokenizer:
    def __init__(self, tokens):
        self.tokens = []
        for token in tokens:
            self.tokens.append(Token(token))

    def tokenize(self, str_val):
        store = []
        temp = ''
        for c in str_val:
            temp = temp + c
            token = self.is_token_search(temp)
            if token:
                self.store_token(store, token)
                temp = ''

        store.append(temp)
        return store

    def store_token(self, store, token):
        if len(token[0]) > 0:
            store.append(token[0])
        if len(token[1]) > 0:
            store.append(token[1])

    def is_token_search(self, str_val):
        for token in self.tokens:
            searched = token.is_token_search(str_val)
            if searched:
                return searched
        return False


class Token:
    def __init__(self, token):
        self.token = token

    def is_token_search(self, str_val):
        searched = re.search(self.token, str_val)
        if searched:
            token_part = searched.group(0)
            not_token_part = str_val[:-len(token_part)]
            return [not_token_part, token_part]
        return False
