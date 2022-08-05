import React from 'react'
import Slider from "react-slick";
import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-3.jpg'
import '../../../styles/slider.css'



const TestimonialSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
  return <Slider {... settings}>
    <div>
    <div>
      <p className="review_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium veritatis, ipsam nostrum beatae a nisi sed expedita doloremque ab eveniet!</p>
    </div>
    <div className='slider_content d-flex align-items-center gap-3'>
        <img src={ava01} alt="avatar" className='rounded' />
        <h6>John Doe</h6>
    </div>
    </div>
    <div>
    <div>
      <p className="review_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium veritatis, ipsam nostrum beatae a nisi sed expedita doloremque ab eveniet!</p>
    </div>
    <div className='slider_content d-flex align-items-center gap-3'>
        <img src={ava02} alt="avatar" className='w-12 rounded' />
        <h6>Michelle Marsh</h6>
    </div>
    </div>
    <div>
    <div>
      <p className="review_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium veritatis, ipsam nostrum beatae a nisi sed expedita doloremque ab eveniet!</p>
    </div>
    <div className='slider_content d-flex align-items-center gap-3'>
        <img src={ava03} alt="avatar" className='rounded'/>
        <h6>Steven Crock</h6>
    </div>
    </div>
  </Slider>
}

export default TestimonialSlider