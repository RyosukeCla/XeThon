import React from 'react'
import ReactDOM from 'react-dom'
import Electron from 'electron'

export default class ApiTest extends React.Component {
  render() {
    return (
      <div>
        <p>Python Api Test Tool</p>
        <ApiForm></ApiForm>
      </div>
    );
  }
}

class ApiForm extends React.Component {
  constructor() {
    super();
    this.callApi = this.callApi.bind(this);
  }

  callApi(e) {
    e.preventDefault();
    var apiPath = ReactDOM.findDOMNode(this.refs.apiPath).value.trim();
    var apiArgs = ReactDOM.findDOMNode(this.refs.apiArgs).value.trim();
    if (!apiPath) {
      return;
    }
    Electron.ipcRenderer.send('asynchronous-message', {api:apiPath, json:apiArgs});
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="api path" ref="apiPath"/>
        <textarea type="text" placeholder="api args" ref="apiArgs"/>
        <button onClick={this.callApi}>Call Api</button>
      </div>
    );
  }
}
