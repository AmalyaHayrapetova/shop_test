import React, { Component } from 'react';
import Heading from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import ShoppingCard from "./ShoppingCard"
import Cards from "./Cards"
import BlogCards from "./BlogCards"
import AboutUsPage from "./AboutUsPage"
// import Blog from "./src/Blog"

class  App extends React.Component {

  render() {
  return (
    // <body>s
    <div className="App">
       <Heading/> 
             {/* <Banner/> */}
             {/* <AboutUsPage/> */}
      {/* <ShoppingCard/> */}
      {/* <Cards/>
      <BlogCards/> */}
      {/* <Blog/> */}
      {/* <Banner/> */}
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      <Footer />

    </div>
    // </body>
  );
}
}

export default App;