import React from 'react';
import './css/main.css';
import './css/default-block.css';
import './css/number.css';
import './css/fonts.css';

import API from './api/API';

import Header from './components/header/Header';
import Cases from './components/cases/Cases';
import Visual from './components/visual/Visulal';
import Statistics from './components/statistics/Statistics';

const cbs = {
    cb: () => {}
};
const api = new API(cbs);

class App extends React.Component {

    constructor(props) {
        super(props);
        cbs.cb = () => {
            this.cases.setState({ downloadStatus: true });
            this.statistics.setState({ downloadStatus: true });
        };
    }

    render() {
        return (
            <div className="container container_padding font_default">
                <Header></Header>
                <Cases
                    ref={cases => this.cases = cases}
                    api={api}
                    downloadStatus={false}
                ></Cases>
                <Visual api={api}></Visual>
                <Statistics
                    ref={statistics => this.statistics = statistics}
                    api={api}
                    downloadStatus={false}
                ></Statistics>
            </div>
        );
    }
}

export default App;