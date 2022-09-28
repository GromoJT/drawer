import { Box, Divider, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./styles/MuiDrawerMainStyles.css";
import MuiDrawerGridElement from './MuiDrawerGridElement';
import MuiDrawerListElement from './MuiDrawerListElement';

import WindowIcon from '@mui/icons-material/Window';
import ViewListIcon from '@mui/icons-material/ViewList';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import Data from '../data/data'

const MuiDrawerMain = (props) => {

    const [gridView,setGridView] = useState(true)
    const [smallGrid,setSmallGrid] = useState(false)
    const items = Data
    console.log(items)
    useEffect(()=>{
        console.log(props.myWidth)
        if(props.myWidth<400){
            setSmallGrid(true)
        }
        else{
            setSmallGrid(false)
        }
    },[])


    
    

    const changeView = () =>{
        setGridView(!gridView)
    }

  return (
    <Box 
        className='prevent-select'
        textAlign='center' 
        role='presentation'
        sx={{
            color:'black',
            height:'100%',
            width:props.myWidth,
            //Standard : 400
            //Mobile : 200
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(6px)",
        }}
    >
        <Box
        sx={{
            
            padding:'1.5rem',
            textAlign:'start',
            color:'white'
        }}>
            <div className='title-area'>
                <Typography variant='h5' component='div'>
                    TEST        
                </Typography>
            </div>
            <div className='description-area'>
                <Typography variant='p' component='div' marginTop='1rem'>
                    Testowy opis tego co widzimy na obrazku...
                    Testowy opis tego co widzimy na obrazku...
                    Testowy opis tego co widzimy na obrazku...
                </Typography>
            </div>

            <Divider sx={{background:'white'}}/>

            <div className='mods-icons-box'>
                
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
                
                

                <IconButton
                 size='small'
                 edge='start'
                 color='inherit'
                 aria-label='edit'
                >
                    <EditIcon />
                </IconButton>
            </div>


            <div className='scroll-div'>
                <div className='scroll-object'>
                    {
                        gridView
                        ?
                            
                            <div className={smallGrid?'grid-container-small':'grid-container-standard'}>
                                {
                   
                                    items.map( item => {
                                            // console.log(item)
                                            return(
                                                <div className='grid-element' key={item.id}>
                                                <MuiDrawerGridElement img={item.img} title={item.title}/>
                                                </div>
                                            )
                                    }) 
                                }
                                
                               
                            </div>
                        :
                            <div className='list-container'>

                            {
                            
                                items.map( item => {
                                        // console.log(item)
                                        return(
                                            <div className='list-element' key={item.id}>
                                                <MuiDrawerListElement img={item.img} title={item.title} />
                                            </div>
                                        )
                                }) 
                            }

                                
                                
                            </div>
                    }
                </div>
            </div>
            <>
            <Box>
                
                <div className='scroll-explanetion'>
                <Divider sx={{background:'white', marginBottom:'1vh'}}/>
                    <Box component='div' sx={{display:'flex',alignItems:'center',marginBottom:'0.5rem'}}>
                        <InfoOutlinedIcon/><Typography sx={{marginLeft:'0.5rem'}} variant='h5'>TEST</Typography>
                    </Box>
                    <div className='expArea'>
                        Testowy opis czegoś czego jeszce nie ma...
                        Testowy opis czegoś czego jeszce nie ma...
                        Testowy opis czegoś czego jeszce nie ma...
                        Testowy opis czegoś czego jeszce nie ma...
                        Testowy opis czegoś czego jeszce nie ma...
                    </div>
                </div>
            </Box>
            </>
            

        </Box>
        
    </Box>     
  )
}

export default MuiDrawerMain