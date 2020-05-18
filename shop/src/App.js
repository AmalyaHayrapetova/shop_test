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

class  App extends React.Component {

  render() {
  return (
    // <body>s
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

    </div>
    // </body>
  );
}
}

export default App;