import React from 'react';
import ReactDOM from 'react-dom';
import ApiTest from './components/ApiTest';

import Header from './header/Header';
import ResizableLayout from './resizableLayout/ResizableLayout';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ResizableLayout />
      </div>
    );
  }
}
/*
<FlexContainer>
  <ResizableFlexBox />
  <ResizableFlexBox flexGrow={1}/>
</FlexContainer>
*/
