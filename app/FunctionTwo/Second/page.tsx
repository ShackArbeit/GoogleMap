'use client'
import '../../globals.css'
import {useMemo} from 'react'
import {AdvancedMarker,APIProvider,InfoWindow,Map,Marker,Pin} from '@vis.gl/react-google-maps';
import { MarkerWithInfowindow } from './marker-with-infowindow';
import { MovingMarker } from './moving-marker';
  
const page = () => {
    const center = useMemo(() => ({lat: 25.0940, lng: 121.24}), []);
  return (
   <APIProvider apiKey='AIzaSyCpAqja_IdyYYjkHPCp7WonW1ToQBDNNuc'>
    <div className='MapContainer'> 
      <Map
      zoom={3}
      center={center}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
      mapId={'f71a6fee1f103260'}
      >
        <Marker
            position={{lat:25.22,lng:113}}
            clickable={true}
            onClick={() => alert('Marker was clicked!')}
            title={'clickable google.maps.Marker'}
        />
      {/* 使用客制 pin 的進階標記 */}
        <AdvancedMarker
             position={{lat:26.22,lng:128.55}}
             title={'使用客制 pin 的進階標記 '}
        >
        <Pin
            background={'#22ccff'}
            borderColor={'#1e89a1'}
            glyphColor={'#0f677a'}>  
        </Pin>
        </AdvancedMarker>
         {/* 帶有 html pin 字形的進階標記 */}
         <AdvancedMarker
          position={{lat: 27.66, lng: 119.78}}
          title={'使用客制 pin 的進階標記 '}>
          <Pin background={'#22ccff'} borderColor={'#1e89a1'} scale={1.4}>
            {/* children are rendered as 'glyph' of pin */}
            👀
          </Pin>
        </AdvancedMarker>
        {/* 帶有 html 內容的進階標記 */}
        <AdvancedMarker
          position={{lat: 23, lng: 128}}
          title={'AdvancedMarker with custom html content.'}>
          <div
            style={{
              width: 20,
              height: 20,
              position: 'absolute',
              top: 0,
              left: 0,
              background: '#1dbe80',
              border: '2px solid #0e6443',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)'
            }}></div>
        </AdvancedMarker>
         {/* 簡單定位資訊視窗 */}
         <InfoWindow position={{lat: 122, lng: 26}} maxWidth={200}>
          <p>
              這是另一個帶有 <em>HTML</em> 元素的資訊視窗的內容。
          </p>
        </InfoWindow>
         {/* 持續更新標記*/}
         <MovingMarker />

       {/* 簡單狀態資訊視窗 */}
        <MarkerWithInfowindow />
      </Map> 
    </div>
   </APIProvider>
  )
}

export default page