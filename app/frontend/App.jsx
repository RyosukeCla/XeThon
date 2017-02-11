import React from 'react';
import ReactDOM from 'react-dom';
import ApiTest from './components/ApiTest';
import FileEditor from './components/FileEditor';
import Playground from './components/Playground';
import Header from './components/Header';
import Drawer from 'material-ui/Drawer/Drawer';
import FlexContainer from './components/FlexContainer';
import ResizableFlexBox from './components/ResizableFlexBox';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FlexContainer>
          <ResizableFlexBox />
          <ResizableFlexBox flexGrow={1}/>
        </FlexContainer>
      </div>
    );
  }
}
