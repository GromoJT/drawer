import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, IconButton } from '@mui/material';
import "./styles/MuiDrawerRightStyles.css";

const MuiDrawerRight = (props) => {
  return (
    <Box
    className='drawer-dongle'>
    <IconButton
        size='small'
        color='inherit'
        aria-label='logo'
        
        onClick={
            ()=>{
                props.handleSetOpen()
            }
        }     
        
        >
            <ArrowBackIosIcon
                className={`${props.open ? "arrowRight" : "arrowLeft"}`}
           />
        </IconButton>


  
   </Box>
  )
}

export default MuiDrawerRight