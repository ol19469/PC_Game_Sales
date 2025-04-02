import React from "react";
import "../App.css";

const GameCard = ({ deal }) => {
  return (
    <div className="game-card">
      <img src={deal.thumb} alt={deal.title} />
      <h3>{deal.title}</h3>
      <p>Normal Price: ${deal.normalPrice}</p>
      <p>Sale Price: ${deal.salePrice}</p>
      <a
        href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Deal
      </a>
    </div>
  );
};

export default GameCard;
