import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import React from "react";

const mapStyles = {
  height: '100vh',
  width: '100%'
};
const defaultCenter = {
  lat: 40.712776,
  lng: -74.005974
};

const MapContainer = () => {

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
  const bounds = new window.google.maps.LatLngBounds(defaultCenter);
  map.fitBounds(bounds);
  setMap(map)
  }, [window?.google?.maps?.LatLngBounds])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  return (<>
  <LoadScript googleMapsApiKey="AIzaSyALBtM7DxfA0rfmEZka-0OryDtg58kZHu4">
  <GoogleMap mapContainerStyles={mapStyles}
   zoom={12}
   center={defaultCenter}
   onLoad={onLoad}
   onUnmount={onUnmount}>
    <Marker position={defaultCenter}/>
   </GoogleMap>
  </LoadScript>
   </>
  
  )
}


export default MapContainer;
