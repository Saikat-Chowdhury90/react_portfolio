import React from 'react'
import '../styles/Carousel.css'
import img_1 from '../images/kashmir_2.jpg';
import img_2 from '../images/kashmir_3.jpg';
import img_3 from '../images/rishikesh.jpg';
const Carousel = () => {
  return (
    <>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img_1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img_2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img_3} className="d-block w-100" alt="..." />
    </div>
  </div>
</div>

    </>
  )
}

export default Carousel