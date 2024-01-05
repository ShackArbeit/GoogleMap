'use client'
import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Link from 'next/link'
import '../globals.css'

const SideNav = () => {
  return (
    <div className='sideNavContainer'>
    <PopupState variant="popover" popupId="demo-popup-menu"
    >
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)} 
            sx={{width:'50%',marginTop:'2rem',marginBottom:'2rem'}}
          >
            展示一
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>
            <Link href="/FunctionOne/First">改變樣式</Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
            <Link href="/FunctionOne/Second">路線規劃</Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
            <Link href="/FunctionOne/Three">群聚顯示</Link>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}
           sx={{width:'50%',marginTop:'2rem',marginBottom:'2rem'}}
          >
            展示二
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>
            <Link href="/FunctionTwo/First">縮放地圖</Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
    </div>
  )
}

export default SideNav