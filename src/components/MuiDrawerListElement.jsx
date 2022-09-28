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
        <div className="listImageTitle">
          {props.title}
        </div>
      </div>
      
    </>
  )
}

export default MuiDrawerListElement



/*

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


*/