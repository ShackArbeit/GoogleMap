'use client'

import {useEffect,useState,useRef} from 'react'
import { useMap,AdvancedMarker } from '@vis.gl/react-google-maps'
import {MarkerClusterer} from '@googlemaps/markerclusterer';
import type {Marker} from '@googlemaps/markerclusterer'

// 定義 Point 類型
type Point = google.maps.LatLngLiteral & {key: string};
// 類型 Props 中的每一個屬性都包含 Points 裡面的所有類型屬性
type Props={points:Point[]}


const Marker = ({points}: Props) => {
    const map=useMap();
    // 定義從 Tress 陣列內的 Key 類型為 Marker 
    const [markers,setMarkers]=useState<{[key:string]:Marker}>({})
    const clusterer=useRef<MarkerClusterer|null>(null)
   // 初始化 MarkerClusterer
   useEffect(()=>{
    if(!map)return
    // 若沒有群聚就產生一個新的群聚
    if(!clusterer.current){
        clusterer.current=new MarkerClusterer({map})
    }
   },[map])
   // 更新 Markers
   useEffect(()=>{
        clusterer.current?.clearMarkers();
        clusterer.current?.addMarkers(Object.values(markers));

   },[markers])
   const setMarkerRef = (marker: Marker | null, key: string) => {
    // 若已有標記就返回不在新增新的標記
    // 若標記已被清除也直接返回
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers(prev => {
      if (marker) {
      // 加上新的屬性名稱 (key) 及屬性值 (marker) 後建立新的標記
        return {...prev, [key]: marker};
      } else {
      // 若 marker 不存在但 key 值存在時，刪除舊有的 key 後將整筆資料刪除
        const newMarkers = {...prev};
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };
  return (
    <div>
        {points.map(point=>(
            <AdvancedMarker
            position={point}
            key={point.key}
            ref={marker=>setMarkerRef(marker,point.key)}
            >    
                <span className="tree">🌳</span>
            </AdvancedMarker>
        ))}
    </div>
  )
}

export default Marker