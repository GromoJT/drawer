import { Box, Divider, IconButton, TextField, Typography } from '@mui/material'

import React, { useState } from 'react'
import "./styles/MuiDrawerMainStyles.css";
import MuiDrawerGridElement from './MuiDrawerGridElement';
import MuiDrawerListElement from './MuiDrawerListElement';

import WindowIcon from '@mui/icons-material/Window';
import ViewListIcon from '@mui/icons-material/ViewList';
import EditIcon from '@mui/icons-material/Edit';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckIcon from '@mui/icons-material/Check';

import Data from '../data/data'



const MuiDrawerMain = (props) => {

 
  

    const [gridView,setGridView] = useState(true)
    const [edit,setEdit] = useState(true)

    const items = Data
    //console.log(items)


    const changeView = () =>{
        setGridView(!gridView)
    }

    const handleSetEdit = () =>{
        setEdit(!edit);
    }
    
    const handleFinishEdit = () =>{
        setEdit(!edit);
    }

    
  return (
    <Box 
        className='prevent-select'
        textAlign='center' 
        role='presentation'
        sx={{
            color:'black',
            height:'100vh',
            width:props.myWidth,
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(6px)",
        }}
    >
        <Box
        sx={{
            marginTop:'1rem',
            padding:'0.7rem',
            textAlign:'start',
            color:'white',
            height:'100vh'
        }}>
            <Box 
                //className='title-area'
                sx={{
                    height:'3vh',
                    marginBottom:'1vh'
                }}    
            >
                <Typography variant='h5' component='div'>
                    TEST        
                </Typography>
            </Box>
            <Box 
                className='description-area'
                sx={{
                    height:'10vh',
                    paddingTop:'0.5vh',
                    paddingBottom:'0.5vh',
                    marginBottom:'1vh',
                    paddingRight:'1rem'
                }}
            >
                {
                    edit
                    ?
                    <Typography variant='p' component='div'>
                        . . .
                    </Typography>
                    :
                    <form noValidate autoComplete="off" style={{color:'white'}}>
                        <TextField
                            defaultValue={'. . .'}
                            fullWidth
                            required
                            InputProps={{
                                style:{color:'white'}
                            }}
                            sx={{
                                border:'1px soild white',borderRadius:1,
                            }}
                            multiline
                        />
                    </form>
                    
                }
                
            </Box>

            <Divider sx={{background:'white'}}/>

            <Box className='mods-icons-box'>
            
            {edit
            ?
            <>
            {
                gridView?
                <>
                    <IconButton
                    disabled
                    size='small'
                    edge='start'
                    color='inherit'
                    aria-label='grid view'
                    >
                        <WindowIcon/>
                    </IconButton>
                
                    <IconButton
                    onClick={changeView}
                    size='small'
                    edge='start'
                    color='inherit'
                    aria-label='list view'
                    
                    >
                        <ViewListIcon />
                    </IconButton>
                </>
                :
                <>
                    <IconButton
                    
                    size='small'
                    edge='start'
                    color='inherit'
                    aria-label='grid view'
                    onClick={changeView}
                    >
                        <WindowIcon/>
                    </IconButton>
                
                    <IconButton
                    disabled
                    size='small'
                    edge='start'
                    color='inherit'
                    aria-label='list view'
                    >
                        <ViewListIcon />
                    </IconButton>
                </>
            }
            </>
            :
                null
            }
            
                
                {
                    edit
                    ?
                    <IconButton
                    size='small'
                    edge='start'
                    color='inherit'
                    aria-label='edit'
                    onClick={handleSetEdit}
                   >
                       <EditIcon />
                   </IconButton>
                    :
                    <IconButton
                    size='small'
                    edge='start'
                    color='inherit'
                    aria-label='edit'
                    onClick={handleFinishEdit}
                    >
                        <CheckIcon />
                    </IconButton>
                }

                
            </Box>
                
            <Box
            sx={{
                height:'50vh',
            }}>

            <Box className='scroll-div'>
                <Box className='scroll-object'>
                    {
                        gridView
                        ?
                            
                            <Box className={props.isMobile?'grid-container-small':'grid-container-standard'}>
                                {
                   
                                    items.map( item => {
                                            // console.log(item)
                                            return(
                                                <div className='grid-element' key={item.id}>
                                                <MuiDrawerGridElement img={item.img} title={item.title} edit={edit}/>
                                                </div>
                                            )
                                    }) 
                                }
                                
                               
                            </Box>
                        :
                            <Box className='list-container'>

                            {
                            
                                items.map( item => {
                                        // console.log(item)
                                        return(
                                            <div className='list-element' key={item.id}>
                                                <MuiDrawerListElement img={item.img} title={item.title} edit={edit}/>
                                            </div>
                                        )
                                }) 
                            }

                                
                                
                            </Box>
                    }
                </Box>
            </Box>
            <Divider sx={{background:'white',marginTop:'1rem',marginBottom:'1rem'}}/>  
                <Box className='scroll-explanetion'>
                    <Box component='div' sx={{display:'flex',alignItems:'center'}}>
                        <InfoOutlinedIcon/><Typography sx={{marginLeft:'0.5rem'}} variant='h6'>TEST</Typography>
                    </Box>
                    {
                        edit
                        ?
                        <Box className='expArea'>
                         . . .
                        </Box>
                        :
                        <Box className='expArea'>
                        <form noValidate autoComplete="off" style={{color:'white'}}>
                        <TextField
                            defaultValue={'. . . '}
                            fullWidth
                            required
                            InputProps={{
                                style:{color:'white'}
                            }}
                            sx={{
                                border:'1px soild white',borderRadius:1,
                            }}
                            multiline
                        />
                        </form>
                        </Box>
                    }
                    
                </Box>
            </Box>
        </Box>
        
    </Box>     
  )
}

export default MuiDrawerMain


/*
<>
    
</>
*/