import React, { Component } from 'react';
import Heading from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import ShoppingCart from "./ShoppingCart"
import Cards from "./Cards"
import BlogCards from "./BlogCards"
import AboutUsPage from "./AboutUsPage"
import Checkout from "./Checkout"
// import Blog from "./src/Blog"
import Routes from './Routes';

class  App extends React.Component {

  render() {
  return (
    // <body
    <div className="App">
       <Heading/> 
             <Banner/>
             {/* <AboutUsPage/> */}
             {/* <Checkout /> */}
      {/* <ShoppingCard/> */}
      <Cards/>
      <BlogCards/>
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      <Footer />
{/* <Routes/> */}
    </div>

  );
}
}

export default App;