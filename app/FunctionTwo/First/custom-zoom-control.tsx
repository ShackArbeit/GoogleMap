import {ControlPosition, MapControl} from '@vis.gl/react-google-maps';

type CustomZoomControlProps = {
    controlPosition: ControlPosition,
    zoom: number,
    onZoomChange: (zoom: number) => void
  };


const CustomZoomControl = ({controlPosition,zoom,onZoomChange}:CustomZoomControlProps) => {
  return (
   <MapControl position={controlPosition}>
    <div style={{
    margin: '20px',
    padding: '2em',
    background: '#fff',
    display: 'flex',
    flexFlow: 'column nowrap'}}>
        <label htmlFor={'zoom'}>縮放圖標</label>
        <input
        id={'zoom'}
        type={'range'}
        min={1}
        max={18}
        step={'any'}
        value={zoom}
        onChange={ev=>onZoomChange(ev.target.valueAsNumber)}
        />
    </div>
   </MapControl>
  )
}

export default CustomZoomControl