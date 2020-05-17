import "./css/banner.css";
import React from "react";
import StoreImage from "./images/224.jpg";
import { Slide } from "react-slideshow-image";
const slideImages = [
  "https://image.freepik.com/free-psd/new-style-sale-promotion-banner-template_85212-146.jpg",
  "https://image.freepik.com/free-psd/sale-banner-template_24972-824.jpg",
  'https://image.freepik.com/free-vector/big-sale-new-collection-banner-design-with-pink-flowers-red-suitcase-beach-sea_1262-12751.jpg'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

function myFunction() {
  console.log("Clicked");
}

 class Banner extends React.Component {
   render() {
  return (
    <div className="BannerParent">
      <div className="BannerContainer">
        <Slide {...properties} className="BannerSlides">
          <div className="BannerMain">
            {/* <img className="BannerImage" src={StoreImage} alt="Store Image" /> */}
            <img className="BannerImage" src={slideImages[0]} />

            <div className="BannerImageMiddle">
              <div className="ButtonContainer">
                <button className="StoreButton" onClick={myFunction()}>
                  {" "}
                  Shop Now!
                </button>
              </div>
            </div>
          </div>

          <div className="BannerMain">
            <img className="BannerImage" src={slideImages[1]} />
            <div className="BannerImageMiddle">
              <div className="ButtonContainer">
                <button className="StoreButton" onClick={myFunction()}>
                  {" "}
                  Shop Now!
                </button>
              </div>
            </div>
          </div>

          <div className="BannerMain">
            <img className="BannerImage" src={slideImages[2]} />
            <div className="BannerImageMiddle">
              <div className="ButtonContainer">
                <button className="StoreButton" onClick={myFunction()}>
                  {" "}
                  Shop Now!
                </button>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>

  );
}
 }
 export default Banner;