import React, { useEffect, useState } from 'react'
import '../styles/Row.css'
function Row ({title,source}){
    
    
    
  return (
    <div className="row">
        <h2>{title}</h2>
            <div className="row-posters">
            {
                
                 <img   src={source}  />
            
            }
            </div>
    </div>
  )
}

export default Row