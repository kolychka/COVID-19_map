import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup, Circle, FeatureGroup, Rectangle, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { features } from './cities.geojson.json';
import './map.css';

// console.log(features[0]);

class Map extends React.Component {
    render() {
        const position = [51.505, -0.09];
        const center = [51.505, -0.09];
        const circleRadius = 200;
        const fillBlueOptions = { fillColor: 'blue' };


        const london = [[
            [0.0, 51.51039],
            [0.0, 51.6],
            [0.0, 51.64111],
            [0.00661, 51.63872],
            [0.01022, 51.63753],
            [0.01756, 51.63728],
            [0.00939, 51.62064],
            [0.01286, 51.61822],
            [0.02261, 51.63617],
            [0.02719, 51.63636],
            [0.04553, 51.63717],
            [0.04064, 51.64011],
            [0.04153, 51.64189],
            [0.03542, 51.64736],
            [0.06325, 51.66336],
            [0.065, 51.66436],
            [0.06597, 51.66708],
            [0.07117, 51.66736],
            [0.0745, 51.66358],
            [0.07769, 51.66619],
            [0.08442, 51.66733],
            [0.08728, 51.66631],
            [0.08636, 51.6645],
            [0.08903, 51.66167],
            [0.08886, 51.66086],
            [0.08775, 51.65578],
            [0.09142, 51.65392],
            [0.09408, 51.65256],
            [0.08369, 51.64542],
            [0.08061, 51.64331],
            [0.06936, 51.64164],
            [0.06828, 51.6403],
            [0.06611, 51.63764],
            [0.05889, 51.63489],
            [0.05575, 51.62767],
            [0.05281, 51.62703],
            [0.05261, 51.62642],
            [0.04989, 51.62294],
            [0.05019, 51.62233],
            [0.04433, 51.61292],
            [0.04458, 51.61097],
            [0.04594, 51.61017],
            [0.05161, 51.61206],
            [0.06569, 51.61678],
            [0.06969, 51.61253],
            [0.07956, 51.61581],
            [0.0915, 51.61767],
            [0.09756, 51.61928],
            [0.10397, 51.61722],
            [0.11192, 51.61945],
            [0.11703, 51.61642],
            [0.12758, 51.61017],
            [0.10858, 51.60378],
            [0.10433, 51.6053],
            [0.08547, 51.6005],
            [0.08536, 51.59914],
            [0.09036, 51.59758],
            [0.08872, 51.58805],
            [0.09078, 51.58661],
            [0.10419, 51.58839],
            [0.11047, 51.58536],
            [0.11544, 51.58294],
            [0.12578, 51.5835],
            [0.12572, 51.58522],
            [0.12561, 51.58944],
            [0.13856, 51.594],
            [0.13936, 51.58442],
            [0.13958, 51.58161],
            [0.14164, 51.58128],
            [0.14681, 51.58042],
            [0.14828, 51.57925],
            [0.15158, 51.57658],
            [0.15908, 51.57814],
            [0.15867, 51.58055],
            [0.15814, 51.58367],
            [0.15017, 51.58486],
            [0.1505, 51.58519],
            [0.15422, 51.58883],
            [0.15394, 51.59342],
            [0.14675, 51.60283],
            [0.15356, 51.61264],
            [0.16258, 51.61461],
            [0.16686, 51.61308],
            [0.17569, 51.61319],
            [0.17744, 51.60855],
            [0.18461, 51.60647],
            [0.18486, 51.60142],
            [0.19189, 51.59803],
            [0.19819, 51.59497],
            [0.20558, 51.59517],
            [0.21342, 51.59258],
            [0.22042, 51.58947],
            [0.24161, 51.58008],
            [0.24208, 51.57733],
            [0.23828, 51.57608],
            [0.24222, 51.57136],
            [0.23903, 51.56875],
            [0.24456, 51.56642],
            [0.24503, 51.56622],
            [0.24864, 51.56931],
            [0.24986, 51.57428],
            [0.25594, 51.57633],
            [0.26153, 51.57597],
            [0.27417, 51.57433],
            [0.28172, 51.56942],
            [0.27783, 51.56728],
            [0.27653, 51.56136],
            [0.26089, 51.55922],
            [0.26089, 51.55558],
            [0.26089, 51.55192],
            [0.24711, 51.54603],
            [0.239, 51.54589],
            [0.23872, 51.55047],
            [0.23369, 51.55156],
            [0.22167, 51.54881],
            [0.21847, 51.5462],
            [0.21256, 51.54594],
            [0.21133, 51.54828],
            [0.19497, 51.53106],
            [0.19119, 51.52922],
            [0.18875, 51.52803],
            [0.18803, 51.52767],
            [0.18689, 51.52772],
            [0.18, 51.52797],
            [0.17672, 51.52442],
            [0.17567, 51.5245],
            [0.15075, 51.5255],
            [0.14969, 51.52364], 
            [0.14942, 51.52317], 
            [0.15789, 51.51964], 
            [0.1595, 51.51347], 
            [0.15008, 51.51464], 
            [0.13986, 51.51786], 
            [0.13842, 51.51831], 
            [0.13828, 51.52175], 
            [0.13333, 51.52375], 
            [0.13403, 51.52586], 
            [0.13436, 51.52689], 
            [0.13436, 51.52692], 
            [0.13356, 51.52703], 
            [0.12397, 51.52892],
            [0.11956, 51.53003], 
            [0.10497, 51.52664], 
            [0.10394, 51.52258], 
            [0.10381, 51.52208], 
            [0.104, 51.522], 
            [0.10592, 51.52111], 
            [0.11408, 51.52217], 
            [0.11606, 51.51966], 
            [0.10692, 51.51597], 
            [0.09522, 51.51678], 
            [0.08789, 51.51678], 
            [0.07914, 51.50994], 
            [0.07169, 51.51228], 
            [0.06794, 51.51539], 
            [0.06719, 51.51556], 
            [0.06147, 51.51678],
            [0.06125, 51.52228], 
            [0.07589, 51.52197], 
            [0.09172, 51.51864], 
            [0.09272, 51.52136], 
            [0.09025, 51.52478], 
            [0.08883, 51.52675], 
            [0.0765, 51.53014], 
            [0.07344, 51.53097], 
            [0.07036, 51.53339], 
            [0.06981, 51.53322], 
            [0.06658, 51.53214], 
            [0.06761, 51.52783], 
            [0.06764, 51.52775], 
            [0.05706, 51.52419], 
            [0.05172, 51.52239],
            [0.04983, 51.51811], 
            [0.04314, 51.51697], 
            [0.04467, 51.51372], 
            [0.04731, 51.51433], 
            [0.04814, 51.51453], 
            [0.05667, 51.5165], 
            [0.05992, 51.51591], 
            [0.06031, 51.51514], 
            [0.06147, 51.51289], 
            [0.06672, 51.51019], 
            [0.06706, 51.50753], 
            [0.06714, 51.50697], 
            [0.06247, 51.50394], 
            [0.06219, 51.50119], 
            [0.06361, 51.50061], 
            [0.05578, 51.49992], 
            [0.0185, 51.5015], 
            [0.01108, 51.50514], 
            [0.00597, 51.51031], 
            [0.0, 51.51039]], 
            [[0.18394, 51.54772], [0.1835, 51.54911], [0.18797, 51.55375], [0.18603, 51.56022], [0.18294, 51.55872], [0.173, 51.55842], [0.16858, 51.56225], [0.16594, 51.56142], [0.17089, 51.55553], [0.16856, 51.55422], [0.17239, 51.54814], [0.16961, 51.5462], [0.17239, 51.54519], [0.17886, 51.54286], [0.18433, 51.54655], [0.18394, 51.54772]], 
            [[0.14058, 51.53519], [0.13889, 51.53589], [0.13606, 51.53497], [0.13511, 51.53467], [0.13414, 51.53242], [0.14131, 51.53056], [0.14314, 51.53414], [0.14058, 51.53519]], 
            [[0.03233, 51.58006], [0.03397, 51.57653], [0.03744, 51.57436], [0.03319, 51.572], [0.02361, 51.57164], [0.01925, 51.56889], [0.01503, 51.56625], [0.01517, 51.56395], [0.02472, 51.55994], [0.02769, 51.55642], [0.04414, 51.55858], [0.05075, 51.55947], [0.05608, 51.56175], [0.05611, 51.56178], [0.0525, 51.56611], [0.04861, 51.5708], [0.04597, 51.57397], [0.04425, 51.57606], [0.04158, 51.57925], [0.04133, 51.58161], [0.04117, 51.58336], [0.04081, 51.58681], [0.04397, 51.58922], [0.03975, 51.59297], [0.03939, 51.5933], [0.03889, 51.59375], [0.03908, 51.59397], [0.04028, 51.59525], [0.04094, 51.59594], [0.04275, 51.59669], [0.05394, 51.60142], [0.06011, 51.60053], [0.0645, 51.60425], [0.06978, 51.60311], [0.07006, 51.60089], [0.07367, 51.60003], [0.07742, 51.60567], [0.06975, 51.60825], [0.06964, 51.60653], [0.06575, 51.60725], [0.06692, 51.60897], [0.06119, 51.60825], [0.0515, 51.60266], [0.04817, 51.60305], [0.04603, 51.60331], [0.04258, 51.60183], [0.03917, 51.59833], [0.03608, 51.59517], [0.03119, 51.59014], [0.03031, 51.58445], [0.03233, 51.58006]]];
        // london.forEach(coords => coords.forEach(coord => coord.reverse()));

        // длина подмассивов разная (0 192) (1 16) (2 8) (3 51)
        london.forEach((coords, i) => console.log(i, coords.length)); 

        // советую поиграть с длинной и высотой массива
        const cityCoordinates = [ 
            [[0, 1], [0, 1], [0, 1]],
            [[1, 2], [1, 2], [1, 2], [1, 2]],
            [[2, 3], [2, 6], [2, 9]]
        ];

        // 1 вариант решения: на for 
        let allSum = [0, 0]; // хранилище среднего значения массива
        for (let i = 0; i < cityCoordinates.length; i++) {
            let sum = [0, 0]; // хранилище среднего значения подмассива
            let coords = cityCoordinates[i];
            for (let j = 0; j < coords.length; j++) {
                // накапливаем значение
                sum[0] += coords[j][0];
                sum[1] += coords[j][1];
            }
            // считаем среднее подмассива
            sum[0] = sum[0]/coords.length;
            sum[1] = sum[1]/coords.length;

            // накапливаем значение
            allSum[0] += sum[0];
            allSum[1] += sum[1];
        }
        // считаем среднее массива
        allSum[0] = allSum[0]/cityCoordinates.length;
        allSum[1] = allSum[1]/cityCoordinates.length;
        console.log('итоговая точка: ', allSum);
        
        // 2 вариант решения: на forEach
        let cityCenter = [0, 0]; // хранилище среднего значения массива
        cityCoordinates.forEach(coords => {
            let localCenter = [0, 0]; // хранилище среднего значения подмассива
            coords.forEach(coord => {
                // накапливаем значение
                localCenter[0] += coord[0];
                localCenter[1] += coord[1];
            });
            // считаем среднее подмассива
            localCenter[0] = localCenter[0]/coords.length;
            localCenter[1] = localCenter[1]/coords.length;

            // накапливаем значение
            cityCenter[0] += localCenter[0];
            cityCenter[1] += localCenter[1];
        });
        // считаем среднее массива
        cityCenter[0] = cityCenter[0]/cityCoordinates.length;
        cityCenter[1] = cityCenter[1]/cityCoordinates.length;
        console.log('итоговая точка: ', cityCenter);

        // 3 вариант решения: на map & reduce
        let cityCenter1 = [0, 0];
        function myBestMethod(index) {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            let lengthCoords = 0;
            cityCenter1[index] = cityCoordinates.map(coords => { 
                lengthCoords += coords.length;
                return coords.map(coord => { return coord[index]; } ).reduce(reducer);
            }).reduce(reducer) / lengthCoords;
        }
        myBestMethod(0);
        myBestMethod(1);
        console.log('итоговая точка: ', cityCenter1);


        return (
            <div className="visual-item visual-item__map visual-item_margin_b default-block map">
                <MapContainer id="map" center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Circle center={center} pathOptions={fillBlueOptions} radius={circleRadius} stroke={false} />
                    <Polygon positions={london} color="blue" />
                </MapContainer>
            </div>
        );
    }
}

export default Map;