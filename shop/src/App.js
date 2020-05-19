import React from "react";
import Heading from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import Cards from "./Cards";
import BlogCards from "./BlogCards";
import Routes from "./Routes";
import SignIn from "./SignIn"

class App extends React.Component {
  render() {
    return (
      // <body
      <div className="App">
        <Heading />
        <Banner />
         <Cards /> 
        <BlogCards /> 
        <Footer />
      </div>
    );
  }
}

export default App;
