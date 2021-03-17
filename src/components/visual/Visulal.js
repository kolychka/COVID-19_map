import React from 'react';
import './visual.css'

import Map from './map/Map';
import Footer from './footer/Footer';

class Visual extends React.Component { 

    render() {
        return (
            <div className="item item__visual">
                <div className="visual-container">
                    <Map></Map>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
    
}

export default Visual;