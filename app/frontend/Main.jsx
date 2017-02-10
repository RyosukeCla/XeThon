import React from 'react'
import ReactDOM from 'react-dom'
import ApiTest from './components/ApiTest'

class Main extends React.Component {
  render() {
    return <div><ApiTest /></div>;
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root-container')
);
