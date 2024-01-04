import '../../globals.css'
import {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// 這裡從 json file 中引入各個樣式設定
import AuberMode from '../../JSON/AubergineMode.json'
import SilverMode from '../../JSON/SilverMode.json'
import DarkMode from '../../JSON/DarkMode.json'
import NightMode from '../../JSON/NightMode.json'
import RetroMode from '../../JSON/RetroMode.json'
import StandMode from '../../JSON/StandardMode.json'

// 定義 props 的 type 
type StylePanelsProps = {
    setSelectedStyle: React.Dispatch<React.SetStateAction<google.maps.MapTypeStyle[] | null>>;
  };

// 定義函式的 type 
const StylePanels:React.FC<StylePanelsProps> = ({ setSelectedStyle}) => {
// 這裡使用 useState 作為選單各個選樣的初始狀態
    const [Style, setStyle] = useState('');
// 這裡是將選取的不同樣式模式 render 到前端呈現的函式
    const handleChange = (event: SelectChangeEvent) => {
// 將使用 getSelectedStyle  函式放進變數  selectedStyle 內
// setSelectedStyle 就是 page.tsx 中定義的 setSelectedStyle，用來改變 MapTypeStyle 
      const selectedStyle = getSelectedStyle(event.target.value);
      setStyle(event.target.value);
      setSelectedStyle(selectedStyle);
    };
// 這裡使用 switch 方法讓使用者選取不同的 Mode ，type 是 string ，分別對應不同的樣式模式
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