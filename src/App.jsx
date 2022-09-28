import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import rentals from "./assets/office-to-rent.json";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>Offices To Rent</h1>
      <div className="grid">
        {rentals &&
          rentals?.map((rental) => (
            <div className="grid__item" key={rental.id}>
              {rental.imgSrc && (
                <img src={rental.imgSrc} alt={rental.location} />
              )}
              {rental.sold && <h2 className="grid__item__sold">SOLD</h2>}
              <div className="grid__item__content">
                <h3>
                  {rental.location}
                  <br />
                  <span>{rental.price}</span>
                </h3>
                {rental.sold && (
                  <span className="grid__item__content__sold">SOLD</span>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
