import React from "react"
const MuiDrawerElement = (props) => { 
  let defSrc = "https://dev.theviewer.co/html/theViewer/content/defaultGalleryThumbnail.png"
  return (
    <div className={`new-flex-tile  ${props.gridView ? " flex-D-Col" : " flex-D-RowJCs"} `}  onClick={() => {props.handleClickOnPano(props.id,props.pid)}}>
      <img src={`${props.MediaType == "video/mp4"? defSrc : props.img}`} className={`new-flex-tile-img ${props.activePano==props.pid ? "active" : ""} ${props.gridView ? " w90" : " w200anim"} `}/>
      {
        !props.edit
        ?
        <div className={`new-flex-tile-img-title ${props.gridView ? " w90" : "w120px"}`} >
          {props.title}
        </div>
        :
        <form className="new-flex-tile-custom-title-form"
        onSubmit={e => { e.preventDefault(); }}  noValidate autoComplete="off">
          <input 
            className={`${props.gridView ? " w100" : "w120px"}`}
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

