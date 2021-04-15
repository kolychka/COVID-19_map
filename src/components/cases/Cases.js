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

    compareTotals(a, b) {
        return b.total - a.total;
    }

    getCasesSummary() {
        let casesSummary = {
            "total": this.api.summary.Global.TotalConfirmed,
            "countries": [],
        }
        this.api.summary.Countries.forEach(country => {
            casesSummary.countries.push({ 
                "id": country.ID, 
                "country": country.Country,
                "total": country.TotalConfirmed,
            });
        });
        casesSummary.countries.sort(this.compareTotals);
        return casesSummary;
    }

    render() {
        // console.log("123", this.api.summary);
        let time = this.api?.summary?.Global?.Date ? this.api.summary.Global.Date : '2021-04-15'; //this.api.summary.Global.Date;
        return (
            <div className="item item__cases">{
                this.state.downloadStatus ? 
                    <List 
                        name="cases" 
                        color="text_red" 
                        summary={this.getCasesSummary()}
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