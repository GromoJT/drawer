import { useState } from 'react'
import { Drawer,Box,Typography,IconButton,Grid, Backdrop, backdropClasses, Collapse, Fade} from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MenuIcon from '@mui/icons-material/Menu'
import { color, display, height } from '@mui/system';
import MuiDrawerMain from './MuiDrawerMain';
import MuiDrawerRight from './MuiDrawerRight';

const MuiDrawer = () => {
    const [isDrawerOpen,setIsDrowerOpen] = useState(false)

    const handleSetIsDrawerOpen = () => {
        setIsDrowerOpen(false);
    }
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
                
                overflowX:'hidden',
                overflowY:'hidden',
                p:0,
                width:450,
                color:'black',
                border:'none',
                backgroundColor:'transparent',
                
            }
          }}
        >
        <Grid container spacing={0} sx={{flexGrow:1}} >
            <Grid item xs={11}>
                <MuiDrawerMain/>
            </Grid>
            <Grid item xs={1}>
                <MuiDrawerRight handleSetIsDrawerOpen={handleSetIsDrawerOpen}/>
            </Grid>

        </Grid>
      </Drawer>
      </>
    )
}

export default MuiDrawer