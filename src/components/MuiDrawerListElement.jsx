import { TextField } from "@mui/material"
import React from "react"
import './styles/MuiListElementStyles.css'

const MuiDrawerListElement = (props) => {
  return (
    <>
      <div className="listImageContainer">
        <img 
            src={props.img}
            loading="lazy"
            alt={props.title}
        />
        {
          props.edit
          ?
          <div className="listImageTitle">
            {props.title}
          </div>
          :
          <TextField 
            size="small" 
            defaultValue={props.title} 
            sx={{paddingLeft:'0.5rem'}}
            fullWidth
            required
            InputProps={{
              style:{color:'white'}
            }}
            />
        }
        
      </div>
      
    </>
  )
}

export default MuiDrawerListElement


