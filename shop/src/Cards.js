import React from "react";
import Image from "./images/224.jpg";
import "./css/cards.css";

const images = [
  "https://image.freepik.com/free-photo/portrait-handsome-smiling-stylish-hipster-lumbersexual-businessman-model-man-dressed-jeans-jacket-clothes_158538-1733.jpg",
  "https://image.freepik.com/free-photo/woman-green-dress-hat-yellow-background_1303-10554.jpg",
  "https://image.freepik.com/free-photo/group-beautiful-chlidren-posing_155003-1988.jpg",
];

 class Cards extends React.Component{
   
     render() {
 
  return (
    <div className="CardParent">
      <div className="CardContainer">
        <div className="CardMain">
          <div className="Card">
            <img className="CardImage" src={images[0]} alt="Avatar" />
            <div className="container">
              <h4 className="CategoryTitle">
                <b>Man</b>
              </h4>
            </div>
          </div>

          <div className="Card">
            <img className="CardImage" src={images[1]} alt="Avatar" />
            <div className="container">
              <h4 className="CategoryTitle">
                <b>Woman</b>
              </h4>
            </div>
          </div>

          <div className="Card">
            <img className="CardImage" src={images[2]} alt="Avatar" />
            <div className="container">
              <h4 className="CategoryTitle">
                <b>Children</b>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

 export default Cards;