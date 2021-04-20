import React from 'react';
import './cases.css';
import List from '../list/List.js'

class Cases extends React.Component {

    constructor(props) {
        super(props);
        
        this.api = props.api;
        this.state = {
            downloadStatus: props.downloadStatus,
        };
    }

    render() {
        let time = this.api?.summary?.Global?.Date ? this.api.summary.Global.Date : '2021-04-15'; //this.api.summary.Global.Date;
        return (
            <div className="item item__cases">{
                this.state.downloadStatus ? 
                    /* TODO вот сюда (и далее, где это есть) добавить ещё один тернарный оператор, который будет переключать списки между собой */
                    <List 
                        name="cases" 
                        title="cases"
                        color="text_red" 
                        summary={this.api.getCustomSummary('TotalConfirmed')}
                    ></List> : ""
                }
                <div className="default-block default-block_padding">
                    <label className="label">Last Updated at (M/D/YYYY)</label>
                    <time className="time number" dateTime={time}>{time}</time>
                </div>
            </div>
        );
    }
}

export default Cases;