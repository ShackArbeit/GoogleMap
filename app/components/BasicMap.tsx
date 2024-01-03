'use client'
import { APIProvider,Map } from "@vis.gl/react-google-maps"
import '../globals.css'


export default function BasicMap() {
  return (
    <APIProvider apiKey='AIzaSyCpAqja_IdyYYjkHPCp7WonW1ToQBDNNuc'>
      <div className='MapContainer'>
          <Map
            zoom={10}
            center={{lat: 25.0940, lng: 121.24}}
            // gestureHandling={'greedy'}
            // disableDefaultUI={true}
          />
    </div>
   </APIProvider>
  )
}
