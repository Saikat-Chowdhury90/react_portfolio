import React from 'react'
import Carousel from '../components/Carousel'
import Row from '../components/Row';
import '../styles/BlogScreen.css';
import pic_1 from '../images/pic_1.jpeg'
import pic_2 from '../images/pic_2.jpg'
import pic_3 from '../images/pic_3.jpg'
import pic_4 from '../images/pic_4.jpg'

const BlogScreen = () => {
  return (
    <>
          
            <Carousel/>
            <div className="heading">
              <h1>Welcome to a new and great India</h1>
            </div>
            <div className="videoScreen">
              <Row title="Trending Places to Visit" source={pic_1} />
              <Row title="Maharastra Vlogs" source={pic_2} />
              <Row title="North India Vlogs" source={pic_3} />
              <Row title="South India Vlogs" source={pic_4} />
              <Row title="Rajasthan Vlogs" source={pic_4} />
            </div>
    
      
    </>
  )
}

export default BlogScreen