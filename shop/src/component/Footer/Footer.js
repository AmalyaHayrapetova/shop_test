import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          boxSizing: "border-box",
          padding: 10,
          borderTop: "1px solid lightgray",
          borderColor: "grey",
          height: 200,
          backgroundColor: "#ffbd39",
          justifyContent: "space-around",
          display: "flex",
        }}
      >
        <div>
          <div
            style={{ color: "#504F5A", fontWeight: "bold", marginBottom: 10 }}
          >
            Legal
          </div>
          <NavLink
            to={"/payment"}
            exact
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)",
            }}
            activeStyle={{
              color: "#4282ad",
              textDecoration: "underline",
            }}
          >
            <div className="footerItem">Terms of payment</div>
          </NavLink>
          <NavLink
            to={"/delivery"}
            exact
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)",
            }}
            activeStyle={{
              color: "#4282ad",
              textDecoration: "underline",
            }}
          >
            <div className="footerItem">Delivery</div>
          </NavLink>
          <NavLink
            to={"/terms-and-conditions"}
            exact
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)",
            }}
            activeStyle={{
              color: "#4282ad",
              textDecoration: "underline",
            }}
          >
            <div className="footerItem">Terms and Conditions</div>
          </NavLink>
          <NavLink
            to={"/privacy"}
            exact
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)",
            }}
            activeStyle={{
              color: "#4282ad",
              textDecoration: "underline",
            }}
          >
            <div className="footerItem">Pravicy Policy</div>
          </NavLink>
          <NavLink
            to={"/return-policy"}
            exact
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)",
            }}
            activeStyle={{
              color: "#4282ad",
              textDecoration: "underline",
            }}
          >
            <div className="footerItem">Return Policy</div>
          </NavLink>
        </div>
        <div>
          <div
            style={{ color: "#504F5A", fontWeight: "bold", marginBottom: 10 }}
          >
            About us
          </div>
          <NavLink
            to={"/info"}
            exact
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)",
            }}
            activeStyle={{
              color: "#4282ad",
              textDecoration: "underline",
            }}
          >
            <div className="footerItem">Our Story</div>
          </NavLink>
          <NavLink
            to={"/careers"}
            exact
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)",
            }}
            activeStyle={{
              color: "#4282ad",
              textDecoration: "underline",
            }}
          >
            <div className="footerItem">Careers</div>
          </NavLink>
          <NavLink
            to={"/careers"}
            exact
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)",
            }}
            activeStyle={{
              color: "#4282ad",
              textDecoration: "underline",
            }}
          >
            <div className="footerItem">Stores</div>
          </NavLink>
        </div>
        <div>
          <div
            style={{ color: "#504F5A", fontWeight: "bold", marginBottom: 10 }}
          >
            Keep In Touch
          </div>
          <a
            href="http://www.facebook.com"
            target="blank"
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)",
            }}
          >
            <div className="footerItem">Facebook</div>
          </a>
        </div>

        <div>
          <div
            style={{ color: "#504F5A", fontWeight: "bold", marginBottom: 10 }}
          >
            Social Media
          </div>
          <a
            href="http://www.facebook.com"
            target="blank"
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)",
            }}
          >
            <div className="footerItem">Facebook</div>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
