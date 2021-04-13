import React from 'react';

class CountryListElement extends React.Component {

    constructor(props) {
        super(props);
        this.color = props.color;
    }

    render() {
        return (
            <div className="list__item list__item_margin list__item_padding">
                <span className={"list__content_margin number " + this.color}>29&nbsp;399&nbsp;987</span>
                <span>US</span>
            </div>
        );
    }
}

export default CountryListElement;