'use client'
import { APIProvider,Map } from "@vis.gl/react-google-maps"

export default function BasicMap() {
  return (
    <APIProvider apiKey='AIzaSyCpAqja_IdyYYjkHPCp7WonW1ToQBDNNuc'>
      <div style={{width:'85vw',height:'100vh',border:'5px solid green'}}>
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
