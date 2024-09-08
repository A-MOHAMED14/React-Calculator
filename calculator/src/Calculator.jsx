import "./style.css";
import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("");
      setResult(0);
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        setResult(eval(input));
      } catch {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="output">
        <div className="previous-number">{input}</div>
        <div className="current-number">{result}</div>
      </div>
      <button className="span-two" key={"AC"} onClick={() => handleClick("AC")}>
        AC
      </button>
      <button key={"DEL"} onClick={() => handleClick("DEL")}>
        DEL
      </button>
      <button key={"/"} onClick={() => handleClick("/")}>
        /
      </button>
      <button key={"1"} onClick={() => handleClick("1")}>
        1
      </button>
      <button key={"2"} onClick={() => handleClick("2")}>
        2
      </button>
      <button key={"3"} onClick={() => handleClick("3")}>
        3
      </button>
      <button key={"*"} onClick={() => handleClick("*")}>
        *
      </button>
      <button key={"4"} onClick={() => handleClick("4")}>
        4
      </button>
      <button key={"5"} onClick={() => handleClick("5")}>
        5
      </button>
      <button key={"6"} onClick={() => handleClick("6")}>
        6
      </button>
      <button key={"+"} onClick={() => handleClick("+")}>
        +
      </button>
      <button key={"7"} onClick={() => handleClick("7")}>
        7
      </button>
      <button key={"8"} onClick={() => handleClick("8")}>
        8
      </button>
      <button key={"9"} onClick={() => handleClick("9")}>
        9
      </button>
      <button key={"-"} onClick={() => handleClick("-")}>
        -
      </button>
      <button key={"."} onClick={() => handleClick(".")}>
        .
      </button>
      <button key={"0"} onClick={() => handleClick("0")}>
        0
      </button>
      <button className="span-two" key={"="} onClick={() => handleClick("=")}>
        =
      </button>
    </div>
  );
}
export default Calculator;
