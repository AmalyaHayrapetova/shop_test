import React, { Component } from "react";
import Heading from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import Cards from "./Cards";
import BlogCards from "./BlogCards";
import Routes from "./Routes";

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
