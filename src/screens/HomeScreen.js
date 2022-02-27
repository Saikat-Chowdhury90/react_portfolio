import React from 'react'
import Navbar from '../components/Navbar';
import profile from '../images/soumya.jpg'
import '../styles/Homescreen.css';

const HomeScreen = () => {


  return (
   <>
    
    
    <div className="pic">
        
            <img className="shadow p-3 mb-5 bg-body"  src={profile} alt="Hello" />
        
        
        <div className="about">
            <p>
                "I am an Indian Film Director,Producer and 
            </p>
             <p>
                 Screenwriter. When I  was 18 years old,
             </p>
              <p>
                  I moved to Mumbai to peruse the fine
              </p>
              <p>
                 arts of Filmmaking, after graduating... 
              </p>
              <p>
                   I spent 6 years in Public Television and
              </p>
              <p>
                  Independent Cinema."
              </p>
              
        </div>

        
        
    </div>
  
   </>
  )
}

export default HomeScreen