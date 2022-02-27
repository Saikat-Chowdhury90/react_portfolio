import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import '../styles/SkillScreen.css';
import Pencil from '../images/pencil.gif';
import Clapboard from '../images/clapboard.gif';
import Writings from '../components/Writings';

import Studio from '../components/Studio';

const SkillScreen = () => {
    const [books, setbooks] = useState(false);
    const [movies, setmovies] = useState(false);
    let navigate= useNavigate()
    function showBlog() 
    {
       navigate("/Blog");
    }
  
    function showMovie() 
    {
        var director=document.getElementById("direct");
        director.parentNode.removeChild(director);
        setmovies(true);  
    }
    function showBook()
    {
           
         
        
            var div_remove=document.getElementById("writing");
           
            div_remove.parentNode.removeChild(div_remove);

            setbooks(true);
             
            
        
       
    }
  return (
    <>
       
            {books && <h1 className='click_h1' style= {{marginTop:'10vh',marginBottom:'30px'}}>Here are my writings...</h1>}
            {books && <Writings />}
            <div className="skill" id='skill'>

             <div className='writing' id='writing' onClick={showBook}>
                 <h1>Want to read my writings...</h1>
                <img className='pencil' src={Pencil} alt="" />
                 
             </div>
             
            </div>
            {movies && <h1 style= {{marginTop:'1px',marginBottom:'30px'}}>Here are my movies...</h1>}
            {movies && <Studio/>}
            <div className="skill_2" id='skill_2'>

             
             <div className="director" id='direct' onClick={showMovie}>
               <h1 style={{color:'white'}}>So Click me to Start the show...</h1>
                <img className='clapboard' src={Clapboard} alt="clap"  />
             </div>
            </div>

            <div className="skill_3" onClick={showBlog}>
              <div className="travel" id='travel' >
               <h1>I am also a Travel Vlogger</h1>
                  <p>Let's Discover India in</p>
                  <p>one Click!!</p>
              </div>
            
              
            </div>
        
            
            
        
        
       

        
    </>
  )
}

export default SkillScreen