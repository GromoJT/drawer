import React from "react"
import "./styles/uber_styles.css";
const MuiDrawerElement = (props) => { 
    let defSrc = "https://dev.theviewer.co/html/theViewer/content/defaultGalleryThumbnail.png"

  return (
    <div className={`newFlexTile ${props.gridView ? " flex-D-Col" : " flex-D-RowJCs"}`}  onClick={() => {props.handleClickOnPanon(props.id,props.pid)}}>
      <img src={`${props.MediaType == "video/mp4"? defSrc : props.img}`} className={`newFlexTileImg ${props.activePanon==props.pid && !props.edit ? "active" : ""} ${props.gridView ? " w90" : " w50t"} `}/>
      
      {
          !props.edit
          ?
          <div className={`newFlexTileImgTitle ${props.gridView ? "w100" : "w35"}`} >
            {props.title}
          </div>
          :
          <form onSubmit={e => { e.preventDefault(); }}  noValidate autoComplete="off">
              <input 
                onChange={e => {props.handlePanosUpdate(e,props.pid)}}
                defaultValue={props.title} 
                required
                />
          </form>  
        }
    </div>
  )
}

export default MuiDrawerElement

