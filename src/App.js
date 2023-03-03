import "./App.css";
import Header from "./components/Header";

function App() {
  const changeColor = (e) => {
    if (
      document.getElementsByClassName("letter")[e.target.innerText - 1].style.backgroundColor ===
      "black"
    ) {
      document.getElementsByClassName("letter")[e.target.innerText - 1].style.backgroundColor =
        "white";
      document.getElementsByClassName("letter")[e.target.innerText - 1].style.color = "red";
    } else {
      document.getElementsByClassName("letter")[e.target.innerText - 1].style.backgroundColor =
        "black";
      document.getElementsByClassName("letter")[e.target.innerText - 1].style.color = "white";
    }
  };
  return (
    <>
      <Header />
      <div className="home">
        <div className="numpad__container">
          <ul id="keyboard">
            <li className="letter" onClick={(e) => changeColor(e)}>
              1
            </li>
            <li className="letter" onClick={changeColor}>
              2
            </li>
            <li className="letter" onClick={changeColor}>
              3
            </li>
            <li className="letter" onClick={changeColor}>
              4
            </li>
            <li className="letter" onClick={changeColor}>
              5
            </li>
            <li className="letter" onClick={changeColor}>
              6
            </li>
            <li className="letter" onClick={changeColor}>
              7
            </li>
            <li className="letter" onClick={changeColor}>
              8
            </li>
            <li className="letter" onClick={changeColor}>
              9
            </li>
            <li className="letter" onClick={changeColor}>
              10
            </li>
            <li className="letter clearl">11</li>
            <li className="letter">12</li>
            <li className="letter">13</li>
            <li className="letter">14</li>
            <li className="letter">15</li>
            <li className="letter">16</li>
            <li className="letter">17</li>
            <li className="letter">18</li>
            <li className="letter">19</li>
            <li className="letter">20</li>
            <li className="letter clearl">21</li>
            <li className="letter">22</li>
            <li className="letter">23</li>
            <li className="letter">24</li>
            <li className="letter">25</li>
            <li className="letter">26</li>
            <li className="letter">27</li>
            <li className="letter">28</li>
            <li className="letter">29</li>
            <li className="letter">30</li>
          </ul>
        </div>
        <div className="buttons">
          <button>Reset</button>
          <button>Submit</button>
        </div>
      </div>
    </>
  );
}

export default App;
