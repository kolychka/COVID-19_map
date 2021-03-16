import React from 'react';
import '../css/select-block.css';
import '../css/cases.css';
import List from '../list/List.js'

class Cases extends React.Component { 
    render() {
        let time = "2021-03-14 19:26";
        return (
            <div className="item item__cases">
                <List></List>
                <div className="default-block default-block_padding">
                    <label className="label">Last Updated at (M/D/YYYY)</label>
                    <time className="time number" dateTime={time}>3/14/2021, 19:26</time>
                </div>
            </div>
        );
    }
}

export default Cases;