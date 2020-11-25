import React from "react";
import { MapContainer, TileLayer,useMap } from 'react-leaflet'
import Markers from './Markers'
import 'leaflet/dist/leaflet.css';
import './Styles/Mapa.css';

// function MyComponent(props) {
//   const {  lat, lng } = props;
//   const map = useMapEvent('click', () => {
//     map.setCenter([lat, lng])
//   })
//   return null
// }


function Mapa (props){
  // constructor(props){
  //   super(props)
  //   const { lat, lng } = this.props;
  //   this.state={
  //     location: {lat: lat,lng: lng}
  //   }
  // }
  function MyComponent() {
    const map = useMap()
    console.log('map center:', map.setZoom(10))
    return null
  }
  
    const {  lat, lng,isp } = props;
    let location= {lat: lat,lng: lng}
    return <MapContainer className='Mapa' center={location} zoom={13} scrollWheelZoom={false}
      style={{ height: '400px', width: '1350px' }}>
        <MyComponent/>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
      <Markers location={location} isp={isp}/>
    </MapContainer>
}

export default Mapa;