import React from 'react';

class CountryListElement extends React.Component {

    constructor(props) {
        super(props);
        this.color = props.color;
        this.country = props.country;
    }

    render() {
        return (
            <div className="list__item list__item_margin list__item_padding">
                <span className={"list__content_margin number " + this.color}>{this.country.total}</span>
                <span>{this.country.country}</span>
            </div>
        );
    }
}

export default CountryListElement;