import { Box, Button, Container, Grid } from "@mui/material";
import React, { memo, useRef, useState } from "react";
import "../css/NumberSelection.css";
import upArrow from "../assets/up-arrow.png";
import downArrow from "../assets/down-arrow.png";
import Countdown from "react-countdown";

function NumberSelection() {
  const count = useRef(0);
  const selection = useRef([]);
  const [entryFee, setEntryFee] = useState(0.01);

  const startTime = useRef(Date.now());

  const handleSubmit = () => {
    if (selection.length < 7) {
      window.alert("Please choose seven lucky numbers!");
      return;
    }
    window.alert("You are in!");
    resetGame();
  };

  const changeColor = (e) => {
    if (
      count + 1 > 7 ||
      document.getElementsByClassName("num__element")[e.target.innerText - 1].style
        .backgroundColor === "#247c71"
    )
      return;
    else {
      document.getElementsByClassName("num__element")[
        e.target.innerText - 1
      ].style.backgroundColor = "black";
      document.getElementsByClassName("num__element")[e.target.innerText - 1].style.color = "white";
      count.current = count.current + 1;
      selection.current = [...selection.current, e.target.innerText];
    }
  };
  const resetGame = () => {
    document.location.reload();
  };

  const increaseEntryFee = () => {
    // entryFee.current = entryFee.current + 0.01;
    setEntryFee(entryFee + 0.01);
  };
  const decreaseEntryFee = () => {
    if (entryFee > 0.01) {
      // entryFee.current = entryFee.current - 0.01;
      setEntryFee(entryFee - 0.01);
    }
  };
  return (
    <div className="home">
      <div className="ct__container">
        <Countdown className="countdown" date={startTime.current + 50000} />
      </div>

      <div className="numpad__container">
        <div className="num__row">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n, i) => (
            <div className="num__element" onClick={changeColor} key={i}>
              {n}
            </div>
          ))}
        </div>
        <div className="num__row">
          {Array.from({ length: 10 }, (_, i) => i + 11).map((n, i) => (
            <div className="num__element" onClick={changeColor} key={i}>
              {n}
            </div>
          ))}
        </div>
        <div className="num__row">
          {Array.from({ length: 10 }, (_, i) => i + 21).map((n, i) => (
            <div className="num__element" onClick={changeColor} key={i}>
              {n}
            </div>
          ))}
        </div>
      </div>
      <div className="price">
        <img src={upArrow} alt="" onClick={increaseEntryFee} />
        {/* <p>{Number(entryFee.current).toFixed(2)} ETH</p> */}
        <p>{Number(entryFee).toFixed(2)} ETH</p>
        <img src={downArrow} alt="" onClick={decreaseEntryFee} />
      </div>

      <div className="buttons">
        <button onClick={resetGame}>Reset</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default NumberSelection;
