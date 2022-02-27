
import React from 'react'
import '../styles/ContactScreen.css'
import twitter from '../images/twitter-brands.svg'
import instagram from '../images/instagram-brands.svg'
import linkedin from '../images/linkedin-brands.svg'
import facebook from '../images/facebook-square-brands.svg'
const ContactScreen = () => {
  return (
    <>
    
    
    
    
        <div className="container">
		          <div className="contact-box">
			            <div className="left"></div>
		            	<div className="right">
			            	<h2>Contact Me</h2>
			            	<p><span>Email :&nbsp;</span><a href="mailto:travelernmoreofficial@gmail.com">travelernmoreofficial@gmail.com</a></p>
                    <p><span>Phone Number :</span>8458074343 | 7738296936</p>
                    
                    <h2>Follow Me</h2>
                    <div className='d-flex justify-content-around'>
                    <a href="http://www.twitter.com/travelernmore"><img style={{width:'45px',cursor:'pointer'}} src={twitter} alt="..." /></a>
                    <a href="http://www.instagram.com/travelernmore"><img style={{width:'45px',cursor:'pointer'}} src={instagram} alt="..." /></a>
                    <a href="https://www.linkedin.com/in/travelernmore/"><img style={{width:'45px',cursor:'pointer'}} src={linkedin} alt="..." /></a>
                    <a href="http://www.facebook.com/travelernmore"><img style={{width:'45px',cursor:'pointer'}} src={facebook} alt="..." /></a>
                    
                    </div>
                    
		            	</div>
                  
		            </div>
	       </div>
      </>
    
  )
}

export default ContactScreen