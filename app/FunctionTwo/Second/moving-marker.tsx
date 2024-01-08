'use client'
import {useState,useEffect} from 'react'
import { Marker } from '@vis.gl/react-google-maps'

export const MovingMarker=()=>{
    const[position,setPosition]=useState<google.maps.LatLngLiteral>({
        lat:-50,
        lng:-121
    })
    useEffect(()=>{
        const interval=setInterval(()=>{
            // 標記當前的時點
            const t=performance.now();
            const lat=Math.cos(t/2000)*5;
            const lng=Math.cos(t/3000)*5;
            setPosition({lat,lng})
        },50)
        return()=>clearInterval(interval)
    })
    return<Marker position={position}></Marker>
}