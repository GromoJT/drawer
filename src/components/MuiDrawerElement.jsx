import { TextField } from "@mui/material"
import React from "react"
import './styles/MuiDrawerElementStyles.css'

const MuiDrawerElement = (props) => {
   
    let givenSRC = props.img
    let defSrc = "https://dev.theviewer.co/html/theViewer/content/defaultGalleryThumbnail.png"
    let cn="newFlexTileImg"

    if(props.MediaType == "video/mp4"){
        givenSRC = defSrc
    }
    if(props.activePanon == props.pid && props.edit == false) {
        cn= cn + " active"
    }
  

    
  return (
    <div className={`newFlexTile ${props.gridView ? " flex-D-Col" : " flex-D-RowJCs"}`}  onClick={() => {props.handleClickOnPanon(props.id,props.pid)}}>
      <img src={givenSRC} className={`${cn} ${props.gridView ? " w90" : " w50t"} `}/>
      
      {
          !props.edit
          ?
          <div className={`newFlexTileImgTitle ${props.gridView ? "w100" : "w35"}`} >
            {props.title}
          </div>
          :
          <form onSubmit={e => { e.preventDefault(); }}  noValidate autoComplete="off">
              <TextField 
                size="small" 
                onChange={e => {props.handlePanosUpdate(e,props.pid)}}
                defaultValue={props.title} 
                width="85%"
                required
                InputProps={{
                    style:{
                        color:'white',
                        fontSize: 'small',
                        letterSpacing:'0px',
                        padding:'0.1rem'
                    }
                }}
                sx={{
                    letterSpacing:"0px",
                    margin: 0,
                }}
                variant='standard'
                
                />
          </form>  
        }
    </div>
  )
}

export default MuiDrawerElement

