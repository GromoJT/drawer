import { useEffect, useState } from 'react'
import { Drawer,IconButton, Fade, } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MuiDrawerMain from './MuiDrawerMain';
import MuiDrawerRight from './MuiDrawerRight';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';





const MuiDrawer = () => {
    
//const [isMobile,setIsMobile] = useState(false)
const [isDrawerOpen,setIsDrowerOpen] = useState(false)
//const [windowSize,setWindowSize] = useState(window.innerWidth)
//const [drawerWidth,setDrawerWidth] = useState(450)



    

    const handleSetIsDrawerOpen = () => {
        setIsDrowerOpen(false);
        window.top.postMessage('sidePanelClosed','*')
        console.log('go!')
    }

    const theme = createTheme({
      breakpoints: {
        values: {
        
          sm: 450,
          md: 1200,
          lg: 2000,
        
        },
      },
    });

    const UnderSM = useMediaQuery(theme.breakpoints.down('sm'));
    const AboveSMButtUnderMD = useMediaQuery(theme.breakpoints.down('md'))
    const AboveLG = useMediaQuery(theme.breakpoints.up('lg'))

    const underXL = useMediaQuery(theme.breakpoints.down('xl'));

    const aboveXXL = useMediaQuery(theme.breakpoints.up('xxl'));
    const underLG = useMediaQuery(theme.breakpoints.down('lg'));
    const aboveLGBunderXXL = useMediaQuery(theme.breakpoints.down('xxl'));

    let dw
    let isMobile
    let isLarge

    if(AboveLG){
      dw=750
      isMobile=false
      isLarge=true
    }
    else if(UnderSM){
      dw=350
      isMobile=true
      isLarge=false
    }
    else{
      dw=450
      isMobile=false
      isLarge=false
    }
    

    const MyDrawer = (
        <Drawer 
            transitionDuration={{ enter: 420, exit: 420 }}
            anchor='left'
            open={isDrawerOpen} 
            variant='persistent'
            onClose={() => {
              setIsDrowerOpen(false)
              window.top.postMessage('sidePanelClosed','*') ;
            }}
            PaperProps={{
            sx:{
                
                width:dw,
                overflowX:'hidden',
                overflowY:'hidden',
                m:0,
                color:'black',
                border:'none',
                backgroundColor:'transparent',
            }
          }}>

          <MuiDrawerMain myWidth={dw-50} isMobile={isMobile}/>
          <MuiDrawerRight myPosition={dw-50} handleSetIsDrawerOpen={handleSetIsDrawerOpen}/>
        
      </Drawer>)
      
    



   
    

    return (
      <ThemeProvider theme={theme}> 
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
        onClick={()=>
        {
          setIsDrowerOpen(true);
          window.top.postMessage('sidePanelOpened','*') ;
          console.log("droawer side opened")   
        }
      }
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

        {MyDrawer}
      </ThemeProvider>
    )
}

export default MuiDrawer