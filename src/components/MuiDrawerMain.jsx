import { Box, IconButton, TextField, Typography } from '@mui/material'

import React, { useEffect, useState } from 'react'
import "./styles/MuiDrawerMainStyles.css";
import MuiDrawerElement from './MuiDrawerElement';
import WindowIcon from '@mui/icons-material/Window';
import ViewListIcon from '@mui/icons-material/ViewList';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

import MuiDrawerRight from "./MuiDrawerRight";

const MuiDrawerMain = () => {

    const [gridView,setGridView] = useState(true)
    const [edit,setEdit] = useState(false)
    const [items,setItems] = useState([])
    const [title,setTitle] = useState("TEST")
    const [description,setDescription] = useState("Lorem ipsum")
    const [galleryContentUrl,setGalleryContentUrl] = useState("")
    const [galleryId,setGalleryId] = useState("")

    const [tempDescription,setTempDescription] = useState("")
    const [tempPanosNames,setTempPanosNames] = useState([])
    const [activePanon,setActivePanon] = useState(0)

    const [changeAccumulator,setChangeAccumulator] = useState([])
    const [updateFlag,setUpdateFlag] = useState(false)

    const [open,setOpen] = useState(true)

    let ch = []




    const changeView = () =>{  
        setGridView(!gridView)
        console.log(gridView)
    }

    const handleSetEditStatusChange = () =>{
        setEdit(!edit);

        if(!edit){
            console.log('Uruchomiono tryb edycji!')
            setTempDescription(description)
            console.log("Zapisany opis: "+ description)
            handleSetTempPanosNames()
            console.log("Zapisano nazwy panonów!")
        }
        else{
            console.log("Kończenie edycji...")
            handleFinishEdit()
            console.log("Wysyłanie zakończone")
        }
    }

    const handleSetTempPanosNames = () =>{
        for(let i = 0 ; i < items.length ; i++){
            setTempPanosNames( (tempPanosNames) => [...tempPanosNames ,{ name : items[i].PName }  ])
        }  
    }

    const handleDescriptionUpdateMSG = () =>{
        if(description!==tempDescription){
            setUpdateFlag(true)
            ch.push({
                holderId : galleryId,
                propertyName:"description",
                type : "GALLERY",
                value : description
            })
        console.log(ch)    
    }
        
    }

    const handlePanosUpdateMSG = () => {
        for( let i = 0 ; i< tempPanosNames.length ; i++){
   
            if(items[i].PName !== tempPanosNames[i].name){
                setUpdateFlag(true)
                let tempType  
                if(items[i].PType == "video/mp4"){
                    tempType = "VIDEO"
                }
                else{
                    tempType = "PANO"
                }
                ch.push({
                    holderId : items[i].SID,
                    propertyName:"panoName",
                    type : "PANO",
                    value : items[i].PName
                })
            }
        }
    }
    
    
    const handleFinishEdit = () =>{
        handleDescriptionUpdateMSG();
        handlePanosUpdateMSG();
            let msg = {
                command : "Update",
                galleryId : galleryId,
                ch : ch
            }
            window.top.postMessage(msg,'*') 
        ch = []
        setTempPanosNames([])
        setTempDescription("")
        setChangeAccumulator([])
        console.log('wysłano zmiany')
    }

    

    const handleTitleUpdate = (event)=>{
        setTitle(event.target.value)
    }

    const handleDescriptionUpdate = (event)=>{
        setDescription(event.target.value)
    }

    const handlePanosUpdate = (event,id) => {
        let ChangedPanonId = id
        items[ChangedPanonId].PName=event.target.value
    }

    const initDescription = (e) =>{
        setDescription(e.data.GalleryDescription)
    }

    
    const initTitle = (e) =>{
        setTitle(e.data.GalleryName)
    }
    
    const initItems = (e,videos) => {
        setItems(e.data.GalleryPanos)
        if(videos.length>0){
            for(let i = 0 ; i<videos.length ; i++ ){
                setItems( (items) => [...items ,{ CID : videos[i].CID, PName : videos[i].PName, PThumbnailId : videos[i].PThumbnailId, PType : videos[i].PType, SID: videos[i].SID }  ])
            }
        }
    }

    const initGalleryContentUrl = (e) =>{
        setGalleryContentUrl(e.data.GalleryContentUrl)
    }
    
    const initGalleryId = (e) =>{
        setGalleryId(e.data.GalleryID)
    }

    const handleClickOnPanon = (panomId,key) => {
        if(!edit){
            let msg = {
                command : "PanoClicked",
                id : panomId
            }
        window.top.postMessage(msg,'*') ;
        }
        setActivePanon(key)
        
    }

    const handleSetOpen = () =>{
        setOpen(!open)
        if(open){
            window.top.postMessage('sidePanelClosed','*')
            console.log("zamykam panel")
        }
        else{
            window.top.postMessage('sidePanelOpened','*')
            console.log("otwieram panel")
        }
        
    }
    

    useEffect(()=>{
        window.addEventListener('message',function(e){
            if(e.origin !== "https://shaky-rules-say-78-9-119-83.loca.lt") return;
            initTitle(e)
            initDescription(e)
            initGalleryId(e)
            initGalleryContentUrl(e)
            initItems(e,e.data.GalleryVideos)
        },false);

        let msg = {
            command:"readyToGetData",
        }
        window.top.postMessage(msg,'*') ;

        return () =>{
            window.removeEventListener('message',initDescription(e),false);
        };

    },[])
    
   
    
    
    
  return (
       

        
         <Box className='main-drawer-box' 
            >
            <MuiDrawerRight handleSetOpen={handleSetOpen} open={open}/>
            
                <Box className='main-drawer-heading' >
                    <Box className='main-drawer-heading-title'>
                        <Typography variant='h5' component='div'>
                            {title}
                        </Typography>
                    </Box>
                    {
                    !edit ?
                    <Box className='main-drawer-heading-descriptiopn'>
                        {description}
                    </Box>
                    :
                    <form className='description-form' noValidate autoComplete="off">
                        
                        <TextField
                            defaultValue={description}
                            onChange={handleDescriptionUpdate}
                            fullWidth
                            required
                            InputProps={{
                                style:{
                                    color:'white',
                                    fontSize: 'small',
                                    letterSpacing:'0px',
                                    height:"100%",
                                    rows:"3",
                                    overflow:'auto',
                                    padding:'0.2rem',  
                                }
                            }}
                            sx={{
                                letterSpacing:"0px",
                                lineHeight:'-1',
                            }}
                            variant='outlined'
                            multiline
                        />
                    </form>
                    }
                </Box>
                <Box className='main-drawer-controls'>
                { 
                    <>
                        <IconButton
                        className={`${!edit ? "custom-IconButton-flex" : "custom-IconButton-none"}`}
                        sx={{
                            padding:'0px',
                            margin:'0px',
                            width:'30px',
                            height:'30px',
                        }}
                        disabled={gridView}
                        edge='start'
                        color='inherit'
                        onClick={changeView}
                        >
                            <WindowIcon sx={{height:'20px',width:'20px'}} />
                        </IconButton>
                    
                        <IconButton
                        className={`${!edit ? "custom-IconButton-flex" : "custom-IconButton-none"}`}
                        sx={{
                            padding:'0px',
                            margin:'0px',
                            width:'30px',
                            height:'30px',
                        }}
                        disabled={!gridView}
                        onClick={changeView}
                        edge='start'
                        color='inherit'>
                            <ViewListIcon sx={{height:'30px'}}/>
                        </IconButton>

                        <IconButton
                            sx={{
                                padding:'0px',
                                margin:'0px',
                                width:'30px',
                                height:'30px',
                            }}
                            edge='start'
                            color='inherit'
                            onClick={handleSetEditStatusChange}>
                            {
                                edit?<CheckIcon  sx={{height:'20px'}}/>:<EditIcon sx={{height:'20px'}}/>
                            }
                        </IconButton>
                            
                       
                    
                    </>
                    }
                </Box>
                <Box className={`main-dawer-box-tile-container ${gridView ? "main-dawer-box-tile-container-2c" : "main-dawer-box-tile-container-1c"}`}>
                    {
                        items.map( (item,index) => {
                            
                            return(
                                <MuiDrawerElement key={index} pid={index} gridView={gridView} img={galleryContentUrl+galleryId+'/'+item.PThumbnailId} MediaType={item.PType} id={item.SID} title={item.PName} edit={edit} activePanon={activePanon} handleClickOnPanon={handleClickOnPanon} handlePanosUpdate={handlePanosUpdate} />
                            )
                        }) 
                    }
                </Box>
            
            
         </Box>
      
  )
}

export default MuiDrawerMain


