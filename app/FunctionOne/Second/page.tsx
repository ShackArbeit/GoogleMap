'use client'
import Direction from "./Direction"
import { APIProvider,Map } from "@vis.gl/react-google-maps"


type LatLngLiteral = google.maps.LatLngLiteral;
const page = () => {
    
  return (
    <APIProvider apiKey='AIzaSyCpAqja_IdyYYjkHPCp7WonW1ToQBDNNuc'>
         <div className='MapContainer'>
         <Map
            zoom={10}
            center={{lat: 25.0940, lng: 121.24}}
            fullscreenControl={false}
          >
             <Direction />
        </Map>
        </div>
    </APIProvider>
  )
}







export default page