//i import react from React library
import React from "react";
//i import PlayerList from the PlayerList component i created in the component folder
import PlayersList from "./assets/components/PlayerList";

// i added some styling and background image to the main page that i later export to the  main.jsx file
function App() {
  return (
    <div
      style={{
        marginTop: "50px",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* I added some styling and background to the heading to make it fine */}
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "gold",
          fontFamily: "fantasy",
          width: "90%",
          marginTop: "10px",
          borderRadius: "10px",
        }}
      >
        JAYTECH LEAKED FIFA 2024 RATING CARD
      </h1>
      <PlayersList />
      {/* I added some styling and background to the footer to make it fine and the love emoji */}
      <footer
        style={{
          textAlign: "center",
          backgroundColor: "gold",
          marginTop: "40px",
          fontFamily: "fantasy",
          backgroundColor: "gold",
          width: "40%",
          borderRadius: "10px",
        }}
      >
        Designed with ❤ by Fasasi for Jaytechent
      </footer>
    </div>
  );
}

export default App;
