import Lo from "leaflet";

export const iconLocation = Lo.icon({
  iconUrl: require("../assets/venue_location_icon.svg"),
  iconRetinaUrl: require("../assets/venue_location_icon.svg"),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});