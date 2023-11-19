// src/PlayersList.js
//react was imported from React library
import React from "react";

//this is the Player.js file (the react-card where the props were destructured into)
import Player from "./Player";

//player was imported from the player.json file so the data can be pased into the Player Card (Player.js)
import { player } from "../../players";

const PlayersList = () => {
  return (
    // some inline styling for the card to wrap and be responsive according to screen size
    // the map function to display all players objects in the array as declared in the player.js and display with the Player.js card format
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px 20px",
        borderRadius: "40px 20px ",
      }}
    >
      {player.map((player) => (
        // i use id for the players so that i can have no error incase two players have the same name, i gave them all a unique id for the map function to map through

        <Player key={player.id} {...player} />
      ))}
    </div>
  );
};
// the playerlist was exported so it can be imported at the app.jsx file
export default PlayersList;
