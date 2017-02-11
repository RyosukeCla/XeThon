import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import xethonTheme from './theme/xethonTheme';
import { Provider } from 'react-redux'
import App from './App'

class Main extends React.Component {
  muiTheme() {
    return getMuiTheme(
      xethonTheme
    );
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={this.muiTheme()}>
        <App />
      </MuiThemeProvider>
    );
  }
}


injectTapEventPlugin();
ReactDOM.render(

    <Main />
  ,
  document.getElementById('root-container')
);
