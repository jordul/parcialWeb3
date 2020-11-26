import React from "react";
import { MapContainer, TileLayer,useMap } from 'react-leaflet'
import Markers from './Markers'
import 'leaflet/dist/leaflet.css';
import './Styles/Mapa.css';


function Mapa (props){
  const {  lat, lng,isp } = props;
  let location= {lat: lat,lng: lng}

  function MyComponent() {
    const map = useMap()
    map.setView(location,13)
    return null
  }

    return <MapContainer className='Mapa' center={location} zoom={13} scrollWheelZoom={true}
      style={{ height: '424px', width: '1350px' }}>
        <MyComponent/>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
      <Markers location={location} isp={isp}/>
    </MapContainer>
}

export default Mapa;