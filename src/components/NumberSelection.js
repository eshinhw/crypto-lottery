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
      document.getElementsByClassName("num__element")[e.target.innerText - 1].style.backgroundColor ===
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
        <div className="num__row">
          <div className="num__element" onClick={changeColor}>1</div>
          <div className="num__element">2</div>
          <div className="num__element">3</div>
          <div className="num__element">4</div>
          <div className="num__element">5</div>
          <div className="num__element">6</div>
          <div className="num__element">7</div>
          <div className="num__element">8</div>
          <div className="num__element">9</div>
          <div className="num__element">10</div>
        </div>
        <div className="num__row">
          <div className="num__element">11</div>
          <div className="num__element">12</div>
          <div className="num__element">13</div>
          <div className="num__element">14</div>
          <div className="num__element">15</div>
          <div className="num__element">16</div>
          <div className="num__element">17</div>
          <div className="num__element">18</div>
          <div className="num__element">19</div>
          <div className="num__element">20</div>
        </div>
        <div className="num__row">
          <div className="num__element">21</div>
          <div className="num__element">22</div>
          <div className="num__element">23</div>
          <div className="num__element">24</div>
          <div className="num__element">25</div>
          <div className="num__element">26</div>
          <div className="num__element">27</div>
          <div className="num__element">28</div>
          <div className="num__element">29</div>
          <div className="num__element">30</div>
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
