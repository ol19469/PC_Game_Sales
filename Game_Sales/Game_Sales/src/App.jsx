import React, { useEffect, useState } from "react";
import GameList from "./components/GameList";
import "./App.css";

function App() {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
      .then((res) => res.json())
      .then((data) => {
        setDeals(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch deals.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <h1>Game Deals</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <GameList deals={deals} />}
    </div>
  );
}

export default App;
