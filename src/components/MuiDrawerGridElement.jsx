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
      <div className="gridImageTitle">
      {props.title}
      </div>
      
      
    </>
  )
}

export default MuiDrawerGridElement