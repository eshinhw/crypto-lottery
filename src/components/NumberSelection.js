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
      document.getElementsByClassName("letter")[e.target.innerText - 1].style.backgroundColor ===
      "black"
    ) {
      return;
    } else {
      document.getElementsByClassName("letter")[e.target.innerText - 1].style.backgroundColor =
        "black";
      document.getElementsByClassName("letter")[e.target.innerText - 1].style.color = "white";
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
        <ul id="keyboard">
          <li className="letter" onClick={(e) => changeColor(e)}>
            1
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            2
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            3
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            4
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            5
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            6
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            7
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            8
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            9
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            10
          </li>
          <li className="letter clearl" onClick={(e) => changeColor(e)}>
            11
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            12
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            13
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            14
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            15
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            16
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            17
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            18
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            19
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            20
          </li>
          <li className="letter clearl" onClick={(e) => changeColor(e)}>
            21
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            22
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            23
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            24
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            25
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            26
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            27
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            28
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            29
          </li>
          <li className="letter" onClick={(e) => changeColor(e)}>
            30
          </li>
        </ul>
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
