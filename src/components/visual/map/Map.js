import React from 'react';
import { MapContainer, TileLayer, Circle, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import cities from './cities.json';
import './map.css';

class Map extends React.Component {

    getRandomIntInclusive (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
      }

    addCircle (index, city, color, radius) {
        return (
            <Circle key={`circle-${index}`} center={city.coordinates} pathOptions={{ fillColor: color }} radius={radius} stroke={false}>
                <Tooltip permanent>{city.name}</Tooltip>
            </Circle>
        );
    }

    render () {
        const position = [55.806254860335194, 37.70017153631288];
        const colors = {
            "red": `rgba(230, 0, 0, 1)`,
            "white": `rgba(255, 255, 255, 1)`,
            "blue": `rgba(115, 178, 255, 1)`,
            "grey": `rgba(214, 214, 214, 1)`,
            "green": `rgba(112, 168, 0, 1)`,
            "orange": `rgba(255, 170, 0, 1)`,
            "yellow": `rgba(255, 255, 0, 1)`,
        };

        return (
            <div className="visual-item visual-item__map visual-item_margin_b default-block map">
                <MapContainer id="map" center={position} zoom={3} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <div>{
                        cities.map((city, i) => {
                            return (this.addCircle(i, city, colors.red, 1000)); // оптимальный радиус ~1000 this.getRandomIntInclusive(0, 80000)
                        })
                    }</div>
                </MapContainer> 
            </div>
        );
    }
}

export default Map;