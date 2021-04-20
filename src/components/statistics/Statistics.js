import React from 'react';
import './statistics.css';
import List from '../list/List';

class Statistics extends React.Component { 

    constructor(props) {
        super(props);
        
        this.api = props.api;
        this.state = {
            downloadStatus: props.downloadStatus,
        };
    }

    render() {
        return (
            <div className="item item__statistics">
                <div className="statistics-container">
                    <div className="statistics-item statistics-item_margin_r statistics-item__deaths">{
                        this.state.downloadStatus ? 
                            <List 
                                name="statistics" 
                                title="deaths"
                                color="text_white" 
                                summary={this.api.getCustomSummary('TotalDeaths')}
                            ></List> : ""
                    }</div>
                    <div className="statistics-item statistics-item_margin_l statistics-item__tests">{
                        this.state.downloadStatus ? 
                            <List 
                                name="statistics" 
                                title="tests"
                                color="text_blue" 
                                summary={this.api.getCustomSummary('TotalRecovered')}
                            ></List> : ""
                    }</div>
                    <div className="statistics-item statistics-item__graph default-block">
                        Statistics
                    </div>
                </div>
            </div>
        );
    }
}

export default Statistics;