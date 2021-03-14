import React from 'react';
import './components/css/main.css';
import './components/css/default-block.css';
import './components/css/number.css';
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
      <div className="container container_padding font_default">
        <Header></Header>
        <Cases></Cases>
        <Visual></Visual>
        <Statistics></Statistics>
      </div>
    );
  }
}

export default App;