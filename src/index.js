import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

function App() {
  const [data, setData] = useState({ shipList: [] });

  useEffect(() => {
    const fetchShips = async () => {
      const result = await axios("https://swapi.co/api/starships");
      setData(result.data);
    };
    fetchShips();
  });

  return (
    <ul>
      {data.shipList.map(ship => (
        <li key={ship.created}>
          <p>{ship.name}</p>
        </li>
      ))}
    </ul>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
