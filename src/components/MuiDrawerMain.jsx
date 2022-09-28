import { Box, Divider, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./styles/MuiDrawerMainStyles.css";
import MuiDrawerGridElement from './MuiDrawerGridElement';


import WindowIcon from '@mui/icons-material/Window';
import ViewListIcon from '@mui/icons-material/ViewList';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const MuiDrawerMain = (props) => {

    const [gridView,setGridView] = useState(true)
    const [smallGrid,setSmallGrid] = useState(false)

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
            backdropFilter:'blure(3px)',
            color:'black',
            height:'100%',
            width:props.myWidth,
            //Standard : 400
            //Mobile : 200
            background: "rgba(7,7,7,0.7)",
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
                    Testowy opis tego co widzimy na obrazku...
                    Testowy opis tego co widzimy na obrazku...
                    Testowy opis tego co widzimy na obrazku...
                    Testowy opis tego co widzimy na obrazku...
                    Testowy opis tego co widzimy na obrazku...
                    Testowy opis tego co widzimy na obrazku...
                </Typography>
            </div>

            <hr/>

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

                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://thispersondoesnotexist.com/image" title="TEST"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://picsum.photos/200/120" title="TEST 2"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://picsum.photos/200/120" title="TEST 2"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://picsum.photos/200/120" title="TEST 2"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://picsum.photos/200/120" title="TEST 2"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://picsum.photos/200/120" title="TEST 2"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://picsum.photos/200/120" title="TEST 2"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://thispersondoesnotexist.com/image" title="TEST"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://thispersondoesnotexist.com/image" title="TEST"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://thispersondoesnotexist.com/image" title="TEST"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://picsum.photos/200/120" title="TEST 2"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://picsum.photos/200/120" title="TEST 2"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://picsum.photos/200/120" title="TEST 2"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://picsum.photos/200/120" title="TEST 2"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://picsum.photos/200/120" title="TEST 2"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://picsum.photos/200/120" title="TEST 2"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://picsum.photos/200/120" title="TEST 2"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://thispersondoesnotexist.com/image" title="TEST"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://thispersondoesnotexist.com/image" title="TEST"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://thispersondoesnotexist.com/image" title="TEST"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://picsum.photos/200/120" title="TEST 2"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://picsum.photos/200/120" title="TEST 2"/>
                                </div>
                                <div className='grid-element'>
                                    <MuiDrawerGridElement img="https://picsum.photos/200/120" title="TEST 2"/>
                                </div>

                            </div>
                        :
                            <div className='list-container'>
                                <div className='list-element'>
                                    test 1
                                </div>
                                <div className='list-element'>
                                    test 2
                                </div>
                                <div className='list-element'>
                                    test 3
                                </div>
                                <div className='list-element'>
                                    test 4
                                </div>
                                <div className='list-element'>
                                    test 5
                                </div>
                                <div className='list-element'>
                                    test 6
                                </div>
                                <div className='list-element'>
                                    test 7
                                </div>
                                <div className='list-element'>
                                    test 8
                                </div>
                                <div className='list-element'>
                                    test 9
                                </div>
                                <div className='list-element'>
                                    test 1
                                </div>
                                <div className='list-element'>
                                    test 2
                                </div>
                                <div className='list-element'>
                                    test 3
                                </div>
                                <div className='list-element'>
                                    test 4
                                </div>
                                <div className='list-element'>
                                    test 5
                                </div>
                                <div className='list-element'>
                                    test 6
                                </div>
                                <div className='list-element'>
                                    test 7
                                </div>
                                <div className='list-element'>
                                    test 8
                                </div>
                                <div className='list-element'>
                                    test 9
                                </div>
                                <div className='list-element'>
                                    test 1
                                </div>
                                <div className='list-element'>
                                    test 2
                                </div>
                                <div className='list-element'>
                                    test 3
                                </div>
                                <div className='list-element'>
                                    test 4
                                </div>
                                <div className='list-element'>
                                    test 5
                                </div>
                                <div className='list-element'>
                                    test 6
                                </div>
                                <div className='list-element'>
                                    test 7
                                </div>
                                <div className='list-element'>
                                    test 8
                                </div>
                                <div className='list-element'>
                                    test 9
                                </div>
                            </div>
                    }
                </div>
            </div>
            <>
            
            <div className='scroll-explanetion'>
            <hr/>
                <div className='scroll-object'>
                    <InfoOutlinedIcon/> TEST
                </div>
            </div>
            </>
            

        </Box>
        
    </Box>     
  )
}

export default MuiDrawerMain