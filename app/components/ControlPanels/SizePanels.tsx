import {ControlPosition} from '@vis.gl/react-google-maps';
import React from 'react'

export type ControlPanelProps={
    position:ControlPosition,
    onControlPositionChange:(position:ControlPosition)=>void
}

const SizePanels = ({position, onControlPositionChange}: ControlPanelProps) => {
    // 定義包含 key ,value 類型的空陣列
    const positionOptions:{key:string,value:ControlPosition}[]=[]
    // 使用 Object.entries 方法，將 ControlPosition 物件裂解屬行名稱 (key) 及 屬性值 (value)
    // 並放入所定義的空陣列 positionOptions 內
    for(const [p,v] of Object.entries(ControlPosition)){
        positionOptions.push({ key:p , value: v as ControlPosition})
    }
  return (
    <div style={{position:'absolute',top:'50px',left:'0',backgroundColor:'#fff'}}>
         <h1>縮放地圖</h1>
         <div>
                 <label>縮放圖標顯示位置</label>
                 <select
                    value={position}
                    onChange={ev=>onControlPositionChange(Number(ev.target.value) as ControlPosition)}
                 >
                    {positionOptions.map(({key,value})=>(
                        <option key={key} value={value}>
                            {key}
                        </option>
                    ))}
                 </select>
         </div>
    </div>
  )
}

export default  React.memo(SizePanels)