import React from 'react'
import '../styles/Row.css'
function Row ({title,source}){
    
    
    
  return (
    <div className="row">
        <h2>{title}</h2>
            <div className="row-posters">
            {
                
                 <img   src={source} alt="row" />
            
            }
            </div>
    </div>
  )
}

export default Row