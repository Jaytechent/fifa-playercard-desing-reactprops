// React was  imported from react modules
import React from "react";
// Card was imported from react-bootstrap installed into the project using npm install react-bootstrap
import Card from "react-bootstrap/Card";
// PropType was imported from npm install prop-type module so i can set the default prop for the props
import PropTypes from "prop-types";
// the object in the player json file were destructured here and placed appropriately inside the card component that was imported from react-boostrap
import "./player.css";
const Player = ({ names, team, nationality, jerseyNumber, age, image }) => {
  return (
    <div>
      <Card
        style={{
          borderColor: "transparent",
          width: "18rem",
        }}
      >
        {" "}
        {/* This div allow me to have the cut edge , i used it to achieve inverted border radius so the top radius could have a deep cut by the side */}
        <div className="invertedBorderRadius">
          <span className="firstCut"> </span>{" "}
          <span className="secondCut"> </span>
        </div>
        {/* i style the card to have a top border radius */}
        <Card.Img
          className="imgCard"
          style={{
            height: "12rem",
            borderRadius: "70px 70px 0px 0px",
            boxShadow:
              "rgb(85, 91, 255) 0px 0px 0px 1px, rgb(31, 193, 27) 0px 0px 0px 3px,rgb(255, 217, 19) 0px 0px 0px 4px, rgb(255, 156, 85) 0px 0px 0px 3px, rgb(255, 85, 85) 0px 0px 0px 5px",
          }}
          variant="top"
          src={image}
        />
        {/* i did inline styling for the card and added some nice fancy fonts */}
        <Card.Body
          style={{
            color: "blue 4x",
            fontFamily: "fantasy",
            boxShadow: "rgba(0, 0, 0, 0.35) 15px 5px 15px",
            borderRadius: "0px 0px 50px 50px",
            textAlign: "center",
            backgroundColor: "gold",
          }}
        >
          {/* This is where i read eact of the props in the player json file to fit their appropriate place in the ccard component imported from react-boostrap
           */}
          <Card.Title>{names}</Card.Title>
          <Card.Text>{nationality}</Card.Text>
          <Card.Text>{team}</Card.Text>
          <Card.Text>{age}</Card.Text>
          <Card.Text>{jerseyNumber}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

// src/Player.js default properties are declare here
// ...

Player.defaultProps = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.string,
  age: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Player;
