import React from "react";
import './css/styles.css'
import Facebook from "./images/facebook.svg"


class Footer extends React.Component{

  render() {

  
  return (

    <div>

      <footer role="contentinfo">
        <div className="Footer">
          <div className="InfoContainer" >
            <section className="FooterSection">
            <h4 className="FooterHeaders">About</h4>
            <ul className="FooterSectionList">
              <li className="FooterSubList">Company </li>
              <li className="FooterSubList">Stores </li>
              <li className="FooterSubList">How to order</li>
              <li className="FooterSubList">Trust & Safety </li>
              <li className="FooterSubList">Policy </li>
            </ul>
            </section>
            <section className="FooterSection">
            <h4 className="FooterHeaders"> Community </h4>
            <ul className="FooterSectionList">
              <li className="FooterSubList">Blog </li>
              <li className="FooterSubList">Gift Cards</li>
              <li className="FooterSubList" href= "https://staff.am/">Careers</li>
            </ul>
            </section>
            <section className="FooterSection">
            <h4 className="FooterHeaders"> Support </h4>
            <ul className="FooterSectionList">
              <li className="FooterSubList">Help Center </li>
            </ul>
            </section>
          </div>
          <div className="CopyRightsContainer">
            <div className="CopyRights">
              <div>© 2020 Shopaholic, Inc. All rights reserved</div>
            </div>
            <div className="Social">
              <div className="SocialIcons">
                <ul className="Soc">
                  <li>
                    <a rel="noopener noreferrer" target="_blank" href='https://www.facebook.com/shopping' />
                    {/* <svg viewBox = "0 0 32 32" role = "img" aria-label="Navigate to Facebook" focusable="false" 
                style="height:18px;width:18px;display:block;fill:currentColor">
                  <path d ="m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78" 
                  fillRule="evenodd"></path> */}
                    {/* <img href={Facebook} height="18" width="18"/> */}

                    {/* </svg> */}
                  </li>

                </ul>
              </div>

            </div>

          </div>


        </div>
      </footer>

    </div>


  );
  }


}

export default Footer;
