import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const buttonAnimation = useSpring({
    transform: "scale(1)",
    from: { transform: "scale(0.95)" },
    reset: true,
    config: { tension: 300, friction: 10 },
  });

  const handleInput = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        const calcResult = eval(input); // Note: Avoid eval in production; use safer alternatives.
        setResult(calcResult);
      } catch {
        setResult("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "C",
    "4",
    "5",
    "6",
    "*",
    "(",
    "1",
    "2",
    "3",
    "-",
    ")",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className="calculator">
      <animated.div style={buttonAnimation}>
        <div className="display">
          <div className="input">{input || "0"}</div>
          <div className="result">{result || ""}</div>
        </div>
      </animated.div>
      <div className="buttons">
        {buttons.map((btn) => (
          <animated.button
            key={btn}
            style={buttonAnimation}
            onClick={() => handleInput(btn)}
          >
            {btn}
          </animated.button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
