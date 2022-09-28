import { useState } from 'react'
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


    const handleSetIsDrawerOpen = () => {
        setIsDrowerOpen(false);
    }

    const standardSize = '450px'
    const mobileSize = '325px'
    
    function getWidth() {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
      );
    }

    console.log(getWidth())



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
                width:235,
                overflowX:'hidden',
                overflowY:'hidden',
                p:0,
                color:'black',
                border:'none',
                backgroundColor:'transparent',
                
            }
          }}

          
        >
          <MuiDrawerMain/>
          <MuiDrawerRight handleSetIsDrawerOpen={handleSetIsDrawerOpen}/>
        {/* <Grid container spacing={0} sx={{flexGrow:1}} >
            <Grid item xs={11}>
                
            </Grid>
            <Grid item xs={1}>
                
            </Grid>

        </Grid> */}
      </Drawer>
      </>
    )
}

export default MuiDrawer