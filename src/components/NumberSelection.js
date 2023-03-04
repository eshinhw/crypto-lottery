import { Box, Button, Container, Grid } from "@mui/material";
import React, { useState } from "react";

function NumberSelection() {
  const [count, setCount] = useState(1);
  const [selection, setSelection] = useState([]);
  const changeColor = (e) => {
    if (count > 7) return;
    if (count === 7) {
      setSelection([...selection, e.target.innerText]);
      setCount(count + 1);
      return;
    }
    if (
      document.getElementsByClassName("num__element")[e.target.innerText - 1].style
        .backgroundColor === "#247c71"
    ) {
      return;
    } else {
      document.getElementsByClassName("num__element")[
        e.target.innerText - 1
      ].style.backgroundColor = "black";
      document.getElementsByClassName("num__element")[e.target.innerText - 1].style.color = "white";
      setCount(count + 1);
      setSelection([...selection, e.target.innerText]);
    }
  };
  const resetNumpad = () => {
    document.location.reload();
  };
  return (
    <div className="home">
      <div className="numpad__container">
        <div className="num__row">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n, i) => (
            <div className="num__element" onClick={changeColor}>
              {n}
            </div>
          ))}
        </div>
        <div className="num__row">
          {Array.from({ length: 10 }, (_, i) => i + 11).map((n, i) => (
            <div className="num__element" onClick={changeColor}>
              {n}
            </div>
          ))}
        </div>
        <div className="num__row">
          {Array.from({ length: 10 }, (_, i) => i + 21).map((n, i) => (
            <div className="num__element" onClick={changeColor}>
              {n}
            </div>
          ))}
        </div>
      </div>

      <div className="buttons">
        <p>Count: {count}</p>
        <p>Selection: {selection}</p>
        <button onClick={resetNumpad}>Reset</button>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default NumberSelection;
