import { useEffect, useState } from 'react'
import { Drawer,IconButton, Fade, } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MuiDrawerMain from './MuiDrawerMain';
import MuiDrawerRight from './MuiDrawerRight';



const MuiDrawer = () => {
    

const [isDrawerOpen,setIsDrowerOpen] = useState(false)
const [windowSize,setWindowSize] = useState(getWindowWidth())


useEffect(() => {
  function handleWindowResize(){
    setWindowSize(getWindowWidth());
  }

  window.addEventListener('resize',handleWindowResize);

  return () => {
    window.removeEventListener('resize',handleWindowResize);
  }

},[]);


function getWindowWidth(){
  return window.innerWidth;
}

    

    const handleSetIsDrawerOpen = () => {
        setIsDrowerOpen(false);
        window.top.postMessage('sidePanelClosed','*')
    }

     let dw = windowSize
     if (dw < 300){
      dw=300
     } 
     console.log(dw)
  

    const MyDrawer = (
        <Drawer 
            //transitionDuration={{ enter: 420, exit: 420 }}
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

          <MuiDrawerMain/>
          <MuiDrawerRight handleSetIsDrawerOpen={handleSetIsDrawerOpen}/>
        
      </Drawer>)
      
    



   
    

    return (
      <> 
      {
        !isDrawerOpen?
        <>
        <Fade in={!isDrawerOpen} {...(!isDrawerOpen ? {timeout:600}:{})}>
        <div style={{
            background: "rgba(41,41,41,1)",
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
          //console.log("droawer side opened")   
        }
      }
        disabled={isDrawerOpen}
        
        style={{
            background: "rgba(41,41,41,0.9023984593837535)",
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
      </>
    )
}

export default MuiDrawer