import React from 'react';
import {Marker,Popup} from 'react-leaflet';
import {iconLocation} from './IconLocation';


const Markers = (props)=>{
    const {location,isp} = props;
    return(
        <Marker position={location} icon={iconLocation}>
            <Popup>
                {isp}
            </Popup>
        </Marker>
    ) 
}

export default Markers;