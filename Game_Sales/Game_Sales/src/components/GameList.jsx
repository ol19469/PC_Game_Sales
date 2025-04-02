import React from "react";
import GameCard from "./GameCard";
import "../App.css";

const GameList = ({ deals }) => {
  return (
    <div className="game-list">
      {deals.map((deal) => (
        <GameCard key={deal.dealID} deal={deal} />
      ))}
    </div>
  );
};

export default GameList;
