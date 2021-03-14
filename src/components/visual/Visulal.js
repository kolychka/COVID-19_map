import React from 'react';
import '../css/visual.css'

import Map from './map/Map';
import Footer from './footer/Footer';

class Visual extends React.Component { 

    render() {
        return (
            <div className="item item__visual">
                <div className="sub-container">
                    <Map></Map>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
    
}

export default Visual;