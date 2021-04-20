import React from 'react';
import { Scrollbar } from 'react-scrollbars-custom';

import './list.css';
import './scrollbar.css';

import CountryListElement from './listElements/CountryListElement';
import TypeCountryListElement from './listElements/TypeCountryListElement';
import TypeRegionListElement from './listElements/TypeRegionListElement';

class List extends React.Component {

    /* TODO проверить скорость работы обоих методов и выбрать оптимальных. Неоптимальный закоментировать с соответствущим пояснением
        console.log(str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        console.log(parseInt(str).toLocaleString('ru-RU'));

        var numberFormat = new Intl.NumberFormat('ru-RU', options);
        console.log(numberFormat.format(1234567890));
        или так
        var formatted = a.map(numberFormat.format); - вот так даже лучше будет
     */

    constructor(props) {
        super(props);
        this.section = {
            name: props.name,
            title: props.title,
            color: props.color,
            summary: props.summary,
        };
    }

    addCountryList(name, countries) {
        return (
            countries.map((country, i) => 
                <CountryListElement 
                    key={`${name}-${country.id}-${i}`}
                    color={this.section.color}
                    country={country}
                ></CountryListElement>
            )
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
                        <h2 className="h2">Global {this.section.title}</h2>
                        <p className={"p number total-number total-number_padding " + this.section.color}>{
                            this.section?.summary?.total
                        }</p>
                    </section>
                    <section 
                        className={"default-block default-block_padding " + 
                            (this.section.name !== "cases" ? "default-block_border-top_none" : "")}>
                        <h3 className={"h3" + (this.section.name === "cases" ? "" : " display_none") }>Cases by Country</h3>
                        <div className="list">
                            <Scrollbar
                                style={{ height: 200 }}
                                ref={ref => (this.scrollbars = ref)}
                                noScrollX 
                                trackYProps={{ className: "track-y" }}
                                thumbYProps={{ className: "thumb-y" }}
                                wrapperProps={{ className: "wraper" }} >
                                {/* { this.addCountryList() }
                                { this.addTypeCountryList() }
                                { this.addTypeRegionList() } */}
                                {
                                    this.section?.summary?.countries ? 
                                        this.addCountryList(this.section.name, this.section.summary.countries) : 
                                        console.log(this.section?.summary?.countries) 
                                }
                            </Scrollbar>
                        </div>
                    </section>
                    <nav>
                        <ul className="list__tabs list__tabs_margin list__tabs_padding_l">
                            <li className="default-block default-block_border-top_none list__tabs-elem list__tabs-elem_padding list__tabs-elem_margin_r"><a href="#a" className="a">Total</a></li>
                            <li className="default-block default-block_border-top_none list__tabs-elem list__tabs-elem_padding"><a href="#a" className="a">New</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default List;