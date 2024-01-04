'use client'
import { APIProvider,Map } from "@vis.gl/react-google-maps"
import {useState} from 'react'
import '../../globals.css'
import StylePanels from "@/app/components/ControlPanels/StylePanels"

const page = () => {
    // 使用 useState 作為地圖不同樣式模式的初始狀態，這裡的 type 是屬於 MapTypeStyle
    const [selectedStyle, setSelectedStyle] = useState<google.maps.MapTypeStyle[] | null>(null);
  return (
    
    <APIProvider apiKey='AIzaSyCpAqja_IdyYYjkHPCp7WonW1ToQBDNNuc'>
    <div className='MapContainer'>
          <Map
            zoom={10}
            center={{lat: 25.0940, lng: 121.24}}
            styles={selectedStyle}
          />
    {/* 將樣式的選單透過外部的 Module 而在 page.tsx 中使用，這裡有一個  setSelectedStyle 的 props 
    他的值是對 selectedStyle 做狀態變化的  setSelectedStyle */}
        <StylePanels
        setSelectedStyle={setSelectedStyle}
        />
    </div>
   </APIProvider>
   
  )
}

export default page