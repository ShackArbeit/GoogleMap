import { useMap } from "@vis.gl/react-google-maps";
import {useEffect,useMemo} from 'react';

import {GoogleMapsOverlay} from '@deck.gl/google-maps/typed';

import type {LayersList} from '@deck.gl/core/typed';

export type DeckglOverlayProps={layers?:LayersList}

export const DeckGlOverlay=({layers}: DeckglOverlayProps)=>{
    // GoogleMapsOverlay 可以在 DeckGlOverlay 的整個生命週期中持續存在
    const deck=useMemo(()=>new GoogleMapsOverlay({interleaved:true}),[]);
    // 地圖啟用將疊加層添加到地圖上
    const map=useMap();
    useEffect(()=>{
        deck.setMap(map)
    },[map])
    // 每當渲染資料改變時，圖層都會更新
    useEffect(()=>{
        deck.setProps({layers})
    },[layers])

    return null
}