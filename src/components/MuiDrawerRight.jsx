import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, IconButton } from '@mui/material';

const MuiDrawerRight = (props) => {
  return (
    <Box
    textAlign='center' 
    role='presentation'
    sx={{
        background: "rgba(9,9,9,0.7)",
        backdropFilter: "blur(4px)",
        color:'white',
        height:'34px',
        width:'34px',
        position:'absolute',
        top:100,
        left:200,
        borderTopRightRadius:'50%',
        borderBottomRightRadius:'50%',
        
    }}
   >
    <IconButton
        size='small'
        color='inherit'
        aria-label='logo'
        onClick={
            ()=>{
            props.handleSetIsDrawerOpen()
            //setForwardIcon(true)
            }
        }
        
        style={{
            
            color:'white',
            
        }}
    >
            <ArrowBackIosIcon/>
        </IconButton>


  
   </Box>
  )
}

export default MuiDrawerRight