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

    compareTotals(a, b) {
        return b.total - a.total;
    }

    getDeathsSummary() {
        let deathsSummary = {
            "total": this.api.summary.Global.TotalDeaths,
            "countries": [],
        }
        this.api.summary.Countries.forEach(country => {
            deathsSummary.countries.push({ 
                "id": country.ID, 
                "country": country.Country,
                "total": country.TotalDeaths,
            });
        });
        deathsSummary.countries.sort(this.compareTotals);
        return deathsSummary;
    }

    render() {
        return (
            <div className="item item__statistics">
                <div className="statistics-container">
                    <div className="statistics-item statistics-item_margin_r statistics-item__deaths">{
                        this.state.downloadStatus ? 
                            <List 
                                name="statistics" 
                                color="text_white" 
                                summary={this.getDeathsSummary()}
                            ></List> : ""
                    }</div>
                    <div className="statistics-item statistics-item_margin_l statistics-item__tests">{
                        this.state.downloadStatus ? 
                            <List 
                                name="statistics" 
                                color="text_blue" 
                                summary={this.getDeathsSummary()}
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