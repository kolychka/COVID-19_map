import React from 'react';
import Map from './map/Map';
import Footer from './footer/Footer';

class Visual extends React.Component { 

    render() {
        return (
            <div className="bg-green">
                Visual
                <Map></Map>
                <Footer></Footer>
            </div>
        );
    }
    
}

export default Visual;