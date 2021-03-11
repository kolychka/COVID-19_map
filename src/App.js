import React from 'react';
import './components/css/main-bg.css'; // цвета для прорисовки блоков, нужно будет удалить

import Header from './components/header/Header';
import Cases from './components/cases/Cases';
import Visual from './components/visual/Visulal';
import Statistics from './components/statistics/Statistics';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="bg-main">
        <p>App</p>
        <Header></Header>
        <Cases></Cases>
        <Visual></Visual>
        <Statistics></Statistics>
      </div>
    );
  }
}

export default App;