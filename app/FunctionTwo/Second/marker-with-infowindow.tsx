'use client'
import {useState} from 'react'
import { AdvancedMarker,InfoWindow,useAdvancedMarkerRef } from '@vis.gl/react-google-maps'

export const MarkerWithInfowindow=()=>{
    const[infowindowOpen,setInfowindowOpen]=useState(true)
    // 使用解構賦值使用 useAdvancedMarkerRef 函式
    const[markRef,marker]=useAdvancedMarkerRef()
    return (
        <>
        <AdvancedMarker
        ref={markRef}
        onClick={()=>setInfowindowOpen(true)}
        position={{lat: 22, lng: 117}}
        title={'AdvancedMarker that opens an Infowindow when clicked.'}
        />
        {infowindowOpen&&(
            <InfoWindow
            anchor={marker}
            maxWidth={400}
            onCloseClick={()=>setInfowindowOpen(false)}

            >
                 <code style={{whiteSpace: 'nowrap'}}>&lt;AdvancedMarker /&gt;</code>{' '}
          combined with an Infowindow.
            </InfoWindow>
        )}
       
        </>
    )
}