'use client'
import '../../globals.css'
import { APIProvider,ControlPosition,Map,MapControl } from '@vis.gl/react-google-maps'
import {useMemo,useState} from 'react'
import SizePanels from '@/app/components/ControlPanels/SizePanels'
import CustomZoomControl from './custom-zoom-control'

const page = () => {
  const[controlPosition,setControlPosition]=useState<ControlPosition>(ControlPosition.LEFT_BOTTOM)
  const[zoom,setZoom]=useState(10)
  const center = useMemo(() => ({lat: 25.0940, lng: 121.24}), []);
  return (
    <APIProvider apiKey='AIzaSyCpAqja_IdyYYjkHPCp7WonW1ToQBDNNuc'>
    <div className='MapContainer'> 
    <Map
      disableDefaultUI={true}
      gestureHandling={'greedy'} 
      mapId={'f71a6fee1f103260'}
      center={center}
      zoom={zoom}
      onZoomChanged={ev => setZoom(ev.detail.zoom)}>
      <MapControl position={ControlPosition.TOP_LEFT}>
        <div
          style={{
            background: 'white',
            padding: '1em'
          }}>
          Zoom: {zoom.toFixed(2)}
        </div>
      </MapControl>

      <CustomZoomControl
        controlPosition={controlPosition}
        zoom={zoom}
        onZoomChange={zoom => setZoom(zoom)}
      />
    </Map>

    <SizePanels
      position={controlPosition}
      onControlPositionChange={p => setControlPosition(p)}
    />
    </div> 
  </APIProvider>
  )
}

export default page