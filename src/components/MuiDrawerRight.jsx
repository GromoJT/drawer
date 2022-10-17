import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./styles/uber_styles.css";
const MuiDrawerRight = (props) => {
  return (
    <div className='drawer-dongle'>
        <button className='drawer-dongle-button' onClick={()=>{props.handleSetOpen()}}>
            <ArrowBackIosIcon className={`${props.open ? "arrowRight" : "arrowLeft"}`}/>
        </button>
    </div>
  )
}

export default MuiDrawerRight