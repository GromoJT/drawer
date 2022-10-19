import {Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./styles/uber_styles.css";
import MuiDrawerElement from './MuiDrawerElement';
import WindowIcon from '@mui/icons-material/Window';
import ViewListIcon from '@mui/icons-material/ViewList';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Data from '../data/data';

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
    const [open,setOpen] = useState(true)
    let changeAccumulator = []

    const changeView = () =>{  
        setGridView(!gridView)
    }

    function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }
    
            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });
    
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }
  
    const handleSetEditStatusChange = () =>{
        setEdit(!edit);

        if(!edit){

            waitForElm('.description-form textarea').then(()=>{
                textAreaResize()
            })
            setTempDescription(description)
            handleSetTempPanosNames()
            
        
        }
        else{
            handleFinishEdit()
        }
    }

    const handleSetTempPanosNames = () =>{
        for(let i = 0 ; i < items.length ; i++){
            setTempPanosNames( (tempPanosNames) => [...tempPanosNames ,{ name : items[i].PName }  ])
        }  
    }

    const handleDescriptionUpdateMSG = () =>{
        if(description!==tempDescription){  
            changeAccumulator.push({
                holderId : galleryId,
                propertyName:"description",
                type : "GALLERY",
                value : description
            }) 
        }   
    }

    const handlePanosUpdateMSG = () => {
        for( let i = 0 ; i< tempPanosNames.length ; i++){
            if(items[i].PName !== tempPanosNames[i].name){   
                let tempType  
                if(items[i].PType == "video/mp4"){
                    tempType = "VIDEO"
                }
                else{
                    tempType = "PANO"
                }
                changeAccumulator.push({
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
                ch : changeAccumulator
            }
            window.top.postMessage(msg,'*') 
        changeAccumulator = []
        setTempPanosNames([])
        setTempDescription("")
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
        if(!edit)
        {
            let msg = {
                command : "PanoClicked",
                id : panomId
            }
            window.top.postMessage(msg,'*') ;
            setActivePanon(key)
        }
        
    }

    const handleSetOpen = () =>{
        setOpen(!open)
        if(open){
            window.top.postMessage('sidePanelClosed','*')
        }
        else{
            window.top.postMessage('sidePanelOpened','*')
        }
    }

    useEffect(()=>{
        window.addEventListener('message',function(e){
            if(e.origin !== "https://neat-windows-jam-78-9-119-83.loca.lt") return;
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

    function textAreaResize(){
        document.getElementById("texta").style.height = "";
        document.getElementById("texta").style.height = document.getElementById("texta").scrollHeight + "px"
    }
    
    return (
        <div className='main-drawer-box'>
            <div className='drawer-dongle'>
                <button className='drawer-dongle-button' onClick={()=>{handleSetOpen()}}>
                    <ArrowBackIosIcon className={`${open ? "arrow-right" : "arrow-left"}`}/>
                </button>
            </div>
            
            <div className='main-drawer-heading' >
                <div className='main-drawer-heading-title'>
                    <Typography variant='h5' component='div'>
                        {title}
                    </Typography>
                </div>
            {
                !edit ?
                <div  className='main-drawer-heading-description'>
                    {description}
                </div>
                :
                <form  className='description-form' noValidate autoComplete="off">
                    <textarea
                        onInput={textAreaResize}
                        className="description-editable-textarea"
                        id={'texta'}
                        defaultValue={description}
                        onChange={handleDescriptionUpdate}
                    />
                </form>
            }
            </div>
            <div className='main-drawer-controls'>
                <button
                    className={` icon-button-base-0-0-30-30 ${!edit ? "custom-iconButton-flex" : "custom-iconButton-none"}`}
                    disabled={gridView}
                    onClick={changeView}>
                        <WindowIcon className='control-icons-grid' />
                </button>
                    
                <button
                    className={` icon-button-base-0-0-30-30 ${!edit ? "custom-iconButton-flex" : "custom-iconButton-none"}`}
                    disabled={!gridView}
                    onClick={changeView}>
                        <ViewListIcon className='control-icons-list'/>
                </button>

                <button className="icon-button-base-0-0-30-30"
                    onClick={handleSetEditStatusChange}>
                    {
                        edit?<CheckIcon className="control-icons-edit-accept"/>:<EditIcon className="control-icons-edit-accept"/>
                    }
                </button>   
            </div>
            <div className={`main-drawer-box-tile-container ${gridView ? "main-drawer-box-tile-container-2c" : "main-drawer-box-tile-container-1c"}`}>
                {
                    items.map( (item,index) => {
                        return(
                            <MuiDrawerElement key={index} pid={index} gridView={gridView} img={galleryContentUrl+galleryId+'/'+item.PThumbnailId} MediaType={item.PType} id={item.SID} title={item.PName} edit={edit} activePanon={activePanon} handleClickOnPanon={handleClickOnPanon} handlePanosUpdate={handlePanosUpdate} />
                        )
                    }) 
                }
            </div>
        </div>
    )
}

export default MuiDrawerMain


