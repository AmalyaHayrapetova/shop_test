import React from "react";
import './css/styles.css'
import UserIcon from "./images/user.png"
import SearchIcon from "./images/search.png"
import BagIcon from "./images/bag.png"
import CenteredTabs from "./Tabs"
import IconLabelTabs from "./IconsTabs"



class Header extends React.Component {

  render() {

  return (
    <header>
    <div className = "MainHeader">
          <div className="Title"> 
        <h1 className = "title">Shopaholic.</h1>
           <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&display=swap" rel="stylesheet"/> 
           <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

        {/* /* <nav>
        <div className="Icons" >
          <button > <img className="SearchIcon" src={SearchIcon}/> </button>
          <button > 
            <img className="UserIcon" alt = "My Account"  src={UserIcon} />           
          </button>
          <button > <img className="BagIcon" src={BagIcon} /> </button>
        </div>
        </nav>  */}
      </div>

      <div className="Title">
      <div className = "TabsSection">
       <CenteredTabs/>
      </div>
      </div>
  <div className="Title">
      <div className = "IconsTabsSection">
       <IconLabelTabs/>
      </div>
      </div>

    </div>

    </header>
  );
}
}
export default Header;