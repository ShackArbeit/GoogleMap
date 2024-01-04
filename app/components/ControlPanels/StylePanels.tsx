import '../../globals.css'
import {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AuberMode from '../../JSON/AubergineMode.json'
import SilverMode from '../../JSON/SilverMode.json'
import DarkMode from '../../JSON/DarkMode.json'
import NightMode from '../../JSON/NightMode.json'
import RetroMode from '../../JSON/RetroMode.json'
import StandMode from '../../JSON/StandardMode.json'


type StylePanelsProps = {
    setSelectedStyle: React.Dispatch<React.SetStateAction<google.maps.MapTypeStyle[] | null>>;
  };


const StylePanels:React.FC<StylePanelsProps> = ({ setSelectedStyle}) => {
    const [Style, setStyle] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
      const selectedStyle = getSelectedStyle(event.target.value);
      setStyle(event.target.value);
      setSelectedStyle(selectedStyle);
    };
  
    const getSelectedStyle = (selectedStyleName: string) => {
      switch (selectedStyleName) {
        case 'Dark Mode':
          return DarkMode;
        case 'Night Mode':
          return NightMode;
        case 'Silver Mode':
          return SilverMode;
        case 'Retro Mode':
          return RetroMode;
        case 'Auber Mode':
          return AuberMode;
        default:
          return StandMode;
      }
    };
  
  return (
    <div
className='StylePanelContainer'

    >
        <FormControl sx={{ m: 1, minWidth: 150}}>
        <InputLabel id="demo-simple-select-autowidth-label">Styles</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={Style}
          onChange={handleChange}
          autoWidth
          label="Style"
        >
          <MenuItem value="">
            <em>Standard Mode</em> 
          </MenuItem>
          <MenuItem value={'Dark Mode'}>Dark Mode</MenuItem>
          <MenuItem value={'Retro Mode'}>Retro Mode</MenuItem>
          <MenuItem value={'Night Mode'}>Night Mode</MenuItem>
          <MenuItem value={'Auber Mode'}>Aubergine Mode</MenuItem>
          <MenuItem value={'Silver Mode'}>Silver Mode</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default StylePanels