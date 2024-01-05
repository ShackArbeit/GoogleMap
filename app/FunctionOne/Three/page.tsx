'use client'
import '../../globals.css'
import Marker from './Marker'
import { APIProvider,Map } from '@vis.gl/react-google-maps'
import trees from './trees'


function page() {
  return (
    <APIProvider apiKey='AIzaSyCpAqja_IdyYYjkHPCp7WonW1ToQBDNNuc'>
    <div className='MapContainer'>
    <Map
       mapId={'f71a6fee1f103260'}
       zoom={10}
       center={{lat: 25.0940, lng: 121.24}}
       fullscreenControl={false}
     >
        <Marker points={trees}/>
   </Map>
   </div>
</APIProvider>
  )
}

export default page