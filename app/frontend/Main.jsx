import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import overrideDarkTheme from './theme/overrideDarkTheme';
import App from './app/App';

import { Provider } from 'react-redux';
import configStore from './configStore';

import Playground from './components/Playground';

class Main extends React.Component {
  muiTheme() {
    return getMuiTheme(
      overrideDarkTheme
    );
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={this.muiTheme()}>
        <App />
      </MuiThemeProvider>
    );
    /*
    return (
      <MuiThemeProvider muiTheme={this.muiTheme()}>
        <App />
      </MuiThemeProvider>
    );
    */
  }
}

// material-ui
injectTapEventPlugin();

// redux
const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>
  ,
  document.getElementById('root-container')
);
