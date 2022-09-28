import React from "react"
import { ImageListItem, ImageListItemBar } from "@mui/material"
import './styles/MuiGridElementStyles.css'
import { Height } from "@mui/icons-material"

const MuiDrawerGridElement = (props) => {
  return (
    <>
      <div className="gridImageContainer">
        <img 
            src={props.img}
            loading="lazy"
            alt={props.title}
        />
      </div>
      <div className="gridImageTitle">
      {props.title}
      </div>
      
      
    </>
  )
}

export default MuiDrawerGridElement