import React from 'react'
import { Slide } from 'react-slideshow-image'
// import './SlideShow.css'
import Image from 'material-ui-image'
import imageOne from '../../images/banner1.jpg'

const slideImages = ['../../images/141.jpg', '../../images/banner1.jpg']

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`)
  }
}

const Slideshow = () => {
  return (
    <div className='slide-container'>
      <Slide {...properties}>
        <div className='each-slide'>
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
          </div>
        </div>
        <div className='each-slide'>
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        {/* <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div> */}
      </Slide>
    </div>
  )
}
export default Slideshow
