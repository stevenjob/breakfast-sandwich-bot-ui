import React from 'react';
import DevTools from 'components/devTools/DevTools';
import Header from 'components/header/Header';
import RandomTextViewer from 'components/randomTextViewer/RandomTextViewerContainer';
import './App.scss';

const App = () => (
  <div id="app">
    <Header />
    <div>
      <RandomTextViewer />
    </div>
    {DevTools && <DevTools />}
  </div>
);

export default App;
