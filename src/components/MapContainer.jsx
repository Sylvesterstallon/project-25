import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import React from "react";
import { motion } from "framer-motion";

const mapStyles = {
  height: '50vh',
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
  return (<motion.div
    initial={{opacity: 0, x:-200}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}
  className="relative p-4 mb-2 bg-cover bg-center md:p-0 xl:px-20 lg:px-30">
  <LoadScript googleMapsApiKey="AIzaSyALBtM7DxfA0rfmEZka-0OryDtg58kZHu4">
  <GoogleMap mapContainerStyle={mapStyles}
   zoom={12}
   center={defaultCenter}
   onLoad={onLoad}
   onUnmount={onUnmount}>
    <Marker position={defaultCenter}/>
   </GoogleMap>
  </LoadScript>
   </motion.div>
  
  )
}


export default MapContainer;
