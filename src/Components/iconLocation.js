import L from "leaflet";
import Puntero from '../imagen-puntero/icon-location.svg'

 const iconLocation = L.icon({
  iconUrl: Puntero,
  iconRetinaUrl: Puntero,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [30, 35],
  className: "leaflet-venue-icon",
});

export {iconLocation  }