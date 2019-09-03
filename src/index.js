import React from "react";
import { useFetch } from "./hook";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const [data, loading] = useFetch("https://swapi.co/api/starships/9/");

  return (
    <>
      <h1>Ships</h1>
      {loading ? (
        "Loading..."
      ) : (
        <ul>
          {data.results.map(ship => (
            <li>
              <p>{ship.name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
