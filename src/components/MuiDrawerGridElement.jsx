import { TextField } from "@mui/material"
import React from "react"
import './styles/MuiGridElementStyles.css'


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
      {
          props.edit
          ?
          <div className="gridImageTitle">
            {props.title}
          </div>
          :
          <TextField 
            size="small" 
            defaultValue={props.title} 
            width="85%"
            required
            InputProps={{
              style:{color:'white'}
            }}
            />
        }
      
      
    </>
  )
}

export default MuiDrawerGridElement