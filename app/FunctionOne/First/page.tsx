'use client'
import { APIProvider,Map } from "@vis.gl/react-google-maps"
import {useState} from 'react'
import '../../globals.css'
import StylePanels from "@/app/components/ControlPanels/StylePanels"

const page = () => {
    const [selectedStyle, setSelectedStyle] = useState<google.maps.MapTypeStyle[] | null>(null);
  return (
    
    <APIProvider apiKey='AIzaSyCpAqja_IdyYYjkHPCp7WonW1ToQBDNNuc'>
    <div className='MapContainer'>
          <Map
            zoom={10}
            center={{lat: 25.0940, lng: 121.24}}
            styles={selectedStyle}
          />
        <StylePanels
        setSelectedStyle={setSelectedStyle}
        />
    </div>
   </APIProvider>
   
  )
}

export default page