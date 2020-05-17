import React from "react";
import AboutImage from "./images/aboutTwo.jpg";
import "./css/aboutUs.css";
import { MdShoppingCart } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { RiHandHeartLine } from "react-icons/ri";
import StoresCarousel from "./StoresCarousel"



class AboutUsPage extends React.Component {
  render() {
    return (
      <div className="AboutUsMain">
        <div className="AboutUsParent">
          <div className="AboutUsContent">
            <div className="contaier">
              <h1 className="title_about"> ABOUT US</h1>
              <hr className="hr"></hr>
              <h2 className="subtitle">Lorem ipsum</h2>
              <p className="paragraph_about">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                consequat tortor fermentum mi fermentum dignissim. Nullam vel
                ipsum ut ligula elementum lobortis. Maecenas aliquam, massa
                laoreet lacinia pretium, nisi urna venenatis tortor, nec
                imperdiet tellus libero efficitur metus. Fusce semper posuere
                ligula, et facilisis metus bibendum interdum. Mauris at mauris
                sit amet sem pharetra commodo a eu leo. Nam at est non risus
                cursus maximus. Nam feugiat augue libero, id consectetur tortor
                bibendum non. Quisque nec fringilla lorem. Nullam efficitur
                vulputate mauris, nec maximus leo dignissim id.
              </p>
            </div>
            <img className="AboutUsImage" src={AboutImage} />
          </div>

          <div className="hr-theme-slash-2">
            <div className="hr-line"></div>
            <section className="IconSection">
              <div className="hr-icon">
                <MdAccountCircle className="react-icons" size={80} />
              </div>
            </section>
            <div className="hr-line"></div>
            <section className="IconSection">
              <div className="hr-icon">
                <MdShoppingCart className="react-icons" size={80} />
              </div>
            </section>
            <div className="hr-line"></div>
            <section className="IconSection">
              <div className="hr-icon">
                <MdPayment className="react-icons" size={80} />
              </div>
            </section>
            <div className="hr-line"></div>
            <section className="IconSection">
              <div className="hr-icon">
                <RiHandHeartLine className="react-icons" size={80} />
              </div>
            </section>
            <div className="hr-line"></div>
          </div>

          <div className="ExploreOurStores">
            <h2 className = "explore_title">Explore Our Stores </h2>
            <StoresCarousel/>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUsPage;
