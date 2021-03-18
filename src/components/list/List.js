import React from 'react';
import './list.css';

import CountryListElement from './listElements/CountryListElement';
import TypeCountryListElement from './listElements/TypeCountryListElement';
import TypeRegionListElement from './listElements/TypeRegionListElement';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.section = {
            name: props.name,
            color: props.color,
        };

        this.listElement = "CountryListElement"; // будет заменено на функцию проверки входящих данных
    }

    addCountryList() {
        /* return data.map((dataItem, i) => {
            return (
                <CountryListElement 
                    color={this.section.color} 
                    key={i} 
                    number={dataItem.number} 
                    country={dataItem.country}
                    ></CountryListElement>
            )
        }); */
        return (
            <CountryListElement color={this.section.color}></CountryListElement> 
        );
    }

    addTypeCountryList() {
        // аналогично addCountryList()
        return (
            <TypeCountryListElement color={this.section.color}></TypeCountryListElement> 
        );
    }

    addTypeRegionList() {
        // аналогично addCountryList()
        return (
            <TypeRegionListElement color={this.section.color}></TypeRegionListElement> 
        );
    }

    render() {
        return (
            <div>
                <div className="default-block_margin_b">
                    <section 
                        className={"default-block " + 
                            (this.section.name === "cases" ? "default-block_margin_b" : "")
                            + " default-block_padding"}>
                        <h2 className="h2">Global Cases</h2>
                        <p className={"p number total-number total-number_padding " + this.section.color}>119 514 479</p>
                    </section>
                    <section 
                        className={"default-block default-block_padding " + 
                            (this.section.name !== "cases" ? "default-block_border-top_none" : "")}>
                        <h3 className={"h3" + (this.section.name === "cases" ? "" : " display_none") }>Cases by Country</h3>
                        <div className="list">{/* сюда вставлять скроллбар */}
                            { this.addCountryList() }
                            { this.addTypeCountryList() }
                            { this.addTypeRegionList() }
                        </div>
                    </section>
                    <nav>
                        <ul className="list__tabs list__tabs_margin list__tabs_padding_l">
                            <li className="default-block default-block_border-top_none list__tabs-elem list__tabs-elem_padding list__tabs-elem_margin_r"><a href="#a" className="a">Global Tests</a></li>
                            <li className="default-block default-block_border-top_none list__tabs-elem list__tabs-elem_padding"><a href="#a" className="a">Region</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default List;