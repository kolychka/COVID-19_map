import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup, Circle, FeatureGroup, Rectangle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import points from './cities.geojson';
import './map.css';

class Map extends React.Component {

    // componentDidMount() {
    //     var points = [
    //         ["ZANZIBAR", -6.13, 39.31],
    //         ["TOKYO", 35.68, 139.76],
    //         ["AUCKLAND", -36.85, 174.78],
    //         ["BANGKOK", 13.75, 100.48],
    //         ["DELHI", 29.01, 77.38],
    //         ["SINGAPORE", 1.36, 103.75],
    //         ["BRASILIA", -15.67, -47.43],
    //         ["RIO DE JANEIRO", -22.9, -43.24],
    //         ["TORONTO", 43.64, -79.4],
    //         ["EASTER ISLAND", -27.11, -109.36],
    //         ["SEATTLE", 47.61, -122.33],
    //         ["LONDON", 51.5072, -0.1275]
    //     ];

    //     const L = window.L;
    //     //create map object and set default positions and zoom level
    //     var map = L.map('map').setView([20, 0], 2);
    //     L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);

    //     var Icon = L.icon({
    //         iconUrl: 'http://myinspirationinformation.com/wp-content/uploads/2015/12/logoAndName.png',
    //         //shadowUrl: 'http://leafletjs.com/docs/images/leaf-shadow.png',
    //         iconSize: [20, 20], // size of the icon
    //         //shadowSize:   [50, 64], // size of the shadow
    //         iconAnchor: [10, 20], // point of the icon which will correspond to marker's location
    //         //shadowAnchor: [4, 62],  // the same for the shadow
    //         popupAnchor: [0, -10] // point from which the popup should open relative to the iconAnchor
    //     });

    //     for (var i = 0; i < points.length; i++) {
    //         L.marker([points[i][1], points[i][2]], { icon: Icon }).bindPopup(points[i][0]).addTo(map);
    //     }
    // }

    render() {
        const position = [51.505, -0.09];
        const center = [51.505, -0.09];
        const circleRadius = 200;
        const fillBlueOptions = { fillColor: 'blue' };
        return (
            <div className="visual-item visual-item__map visual-item_margin_b default-block map">
                {/* <div id="map"></div> */}
                <MapContainer id="map" center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Circle center={center} pathOptions={fillBlueOptions} radius={circleRadius} stroke={false} />
                </MapContainer>
            </div>
        );
    }
}

export default Map;