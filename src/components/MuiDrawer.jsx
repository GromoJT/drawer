import { useEffect, useState } from 'react'
import { Drawer,Box,Typography,IconButton,Grid, Backdrop, backdropClasses, Collapse, Fade, SwipeableDrawer} from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MenuIcon from '@mui/icons-material/Menu'
import { color, display, height } from '@mui/system';
import MuiDrawerMain from './MuiDrawerMain';
import MuiDrawerRight from './MuiDrawerRight';

const MuiDrawer = () => {
    
    const [isMobile,setIsMobile] = useState(false)
    const [isDrawerOpen,setIsDrowerOpen] = useState(false)
    const [screanInnerWidth,setScreanInnerWidth] = useState(window.innerWidth)
    const [drawerWidth,setDrawerWidth] = useState(450)

    const handleSetIsDrawerOpen = () => {
        setIsDrowerOpen(false);
    }
    
    console.log(screanInnerWidth)

    return (
      <> 
      {
        !isDrawerOpen?
        <>
        <Fade in={!isDrawerOpen} {...(!isDrawerOpen ? {timeout:600}:{})}>
        <div style={{
            background: "rgba(7,7,7,1)",
            height:'34px',
            width:'20px',
            position:'fixed',
            top:'100px',
            
            }}>
        <IconButton
        size='small'
        edge='start'
        color='inherit'
        aria-label='logo'
        onClick={()=>setIsDrowerOpen(true)}
        disabled={isDrawerOpen}
        
        style={{
            background: "rgba(7,7,7,1)",
            color:'white',
            position:'fixed',
            top:'100px',
            left:'5px'
            
        }}
        >
       <ArrowForwardIosIcon/>
          
      </IconButton>
      </div>
      </Fade>
        </>
      :
      null
      }

        <Drawer
            anchor='left'
            open={isDrawerOpen} 
            variant='persistent'
            onClose={() => setIsDrowerOpen(false)}
            PaperProps={{
            sx:{
                
                width:drawerWidth,
                //Standard : 450
                //Mobile : 250
                overflowX:'hidden',
                overflowY:'hidden',
                p:0,
                color:'black',
                border:'none',
                backgroundColor:'transparent',
            }
          }}>

          <MuiDrawerMain myWidth={drawerWidth-50}/>
          <MuiDrawerRight myPosition={drawerWidth-50} handleSetIsDrawerOpen={handleSetIsDrawerOpen}/>
        
      </Drawer>
      </>
    )
}

export default MuiDrawer