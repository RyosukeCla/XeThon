import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import xethonTheme from './theme/xethonTheme';
import App from './App';

import { Provider } from 'react-redux';
import configStore from './configStore';

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
