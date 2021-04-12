import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup, Circle, FeatureGroup, Rectangle, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import cities from './cities.json';
import './map.css';

class Map extends React.Component {

    getRandomIntInclusive (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
      }

    addCircle (index, center, radius) {
        return (<Circle key={`circle-${index}`} center={center} pathOptions={{ fillColor: 'blue' }} radius={radius} stroke={false} />);
    }

    render () {
        const position = [51.505, -0.09];

        return (
            <div className="visual-item visual-item__map visual-item_margin_b default-block map">
                <MapContainer id="map" center={position} zoom={5} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <div>{
                        cities.map((city, i) => {
                            return (this.addCircle( i, city.coordinates, this.getRandomIntInclusive(0, 80000))); // оптимальный радиус ~1000
                        })
                    }</div>
                </MapContainer> 
            </div>
        );
    }
}

export default Map;