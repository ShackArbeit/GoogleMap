'use client'
import React, {useEffect, useState} from 'react';
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import '../../globals.css'

import {GeoJsonLayer} from '@deck.gl/layers/typed';
import {DeckGlOverlay} from './deckgl-overlay';

const DATA_URL =
  'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart.geo.json';

import type {Feature, GeoJSON} from 'geojson';



const page = () => {
  const center={lat: 37.74, lng: -122.4}
  const [data, setData] = useState<GeoJSON | null>(null);

  useEffect(() => {
    fetch(DATA_URL)
      .then(res => res.json())
      .then(data => setData(data as GeoJSON));
  }, []);

  return (
    <APIProvider apiKey='AIzaSyCpAqja_IdyYYjkHPCp7WonW1ToQBDNNuc'>
    <div className='MapContainer'> 
      <Map
        center={center}
        zoom={11}
        mapId={'f71a6fee1f103260'}
        gestureHandling={'greedy'}
        disableDefaultUI={true}>
        <DeckGlOverlay layers={getDeckGlLayers(data)} />
      </Map>
    </div>
    </APIProvider>
  );
};

function getDeckGlLayers(data: GeoJSON | null) {
  if (!data) return [];

  return [
    new GeoJsonLayer({
      id: 'geojson-layer',
      data,
      stroked: false,
      filled: true,
      extruded: true,
      pointType: 'circle',
      lineWidthScale: 20,
      lineWidthMinPixels: 4,
      getFillColor: [160, 160, 180, 200],
      getLineColor: (f: Feature) => {
        const hex = f?.properties?.color;

        if (!hex) return [0, 0, 0];

        return hex.match(/[0-9a-f]{2}/g)!.map((x: string) => parseInt(x, 16));
      },
      getPointRadius: 200,
      getLineWidth: 1,
      getElevation: 30
    })
  ];
}

export default page;
