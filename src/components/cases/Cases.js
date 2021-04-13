import React from 'react';
import './cases.css';
import List from '../list/List.js'

class Cases extends React.Component {

    constructor(props) {
        super(props);
        
        this.api = props.api;
        this.state = props.downloadStatus;
    }

    render() {

        console.log('А йА туд в рендере!!!', this.api.getDownloadCountries());

        let time = "2021-03-14 19:26";
        return (
            <div className="item item__cases">
                <List name="cases" color="text_red"></List>
                <div className="default-block default-block_padding">
                    <label className="label">Last Updated at (M/D/YYYY)</label>
                    <time className="time number" dateTime={time}>3/14/2021, 19:26</time>
                </div>
            </div>
        );
    }
}

export default Cases;