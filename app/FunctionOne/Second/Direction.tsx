'use client '
import {useState,useEffect} from 'react';
import {useMapsLibrary,useMap } from '@vis.gl/react-google-maps';
import '../../globals.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Direction  = () => {
    const map=useMap();
    const routeslibary=useMapsLibrary('routes');
    const [directionsService,setDirectionsService]=useState<google.maps.DirectionsService>();
    const [directionsRenderer,setDirectionsRenderer]=useState<google.maps.DirectionsRenderer>();
    const [routes,setRoutes]=useState<google.maps.DirectionsRoute[]>([]);
    const [routeIndex, setRouteIndex] = useState(0);
    const selected=routes[routeIndex]
    const leg=selected?.legs[0]
    const [origin, setOrigin] = useState('臺灣師範大學');
    const [destination, setDestination] = useState('台北101');
    const [isCalculating, setIsCalculating] = useState(false);
    // 初始化 directions service & renderer 
    useEffect(()=>{
        if(!routeslibary||!map)return
        setDirectionsService(new routeslibary.DirectionsService())
        setDirectionsRenderer(new routeslibary.DirectionsRenderer({map}))
    },[routeslibary,map])
   // 使用 directions service 
   const handleCalculateRoute = () => {
    setIsCalculating(true);
     if (directionsService && directionsRenderer) {
       directionsService.route({
         origin: origin,
         destination: destination,
         travelMode: google.maps.TravelMode.DRIVING,
         provideRouteAlternatives: true
       }).then(response => {
         directionsRenderer.setDirections(response);
         setRoutes(response?.routes || []);
         setIsCalculating(false);
       });
     }
   };

return (
    <div className='DirectionPanelContainer'>
      <div style={{ display: 'flex', flexDirection: 'column' }} >
        <TextField label="起點" variant="outlined"
                   value={origin}
                   onChange={(e) => setOrigin(e.target.value)}
        />
        <TextField label="終點" variant="outlined" sx={{marginBottom:'3rem'}}
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
        />
        <Button variant="contained" color="primary"
                onClick={handleCalculateRoute} disabled={isCalculating}
        >
          {isCalculating ? 'Calculating...' : '計算路徑'}
        </Button>
      </div>
      {leg && (
        <div>
          <h2>從  {leg.start_address.split(',')[0]} 到  {leg.end_address.split(',')[0]} </h2> 
          <h2> 距離 :  {leg.distance?.text}</h2>
          <h2> 時長 :  {leg.duration?.text}</h2>
          <h2> 其他路徑 </h2>
          <ul>
            {routes.map((route, index) => (
              <li key={route.summary}>
                <button onClick={() => setRouteIndex(index)}>
                  {route.summary}
                </button>
              </li>
            ))}
          </ul>  
        </div>
      )}
    </div>
  );
}
export default Direction 