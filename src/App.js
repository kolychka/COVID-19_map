import React from 'react';
import './components/css/main-bg.css'; // цвета для прорисовки блоков, нужно будет удалить
import './components/css/main.css';
import './components/css/fonts.css';

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
      <div className="bg-main container font_default">
        <Header></Header>
        <Cases></Cases>
        <Visual></Visual>
        <Statistics></Statistics>
      </div>
    );
  }
}

export default App;