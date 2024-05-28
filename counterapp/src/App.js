import "./counter.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increament,
  decreament,
  increamentByvalue,
  decreamentByValue,
  reset,
} from "./state/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(0);

  const error = useSelector((state) => state.counter.error);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const handleIncreament = () => {
    dispatch(increament());
  };

  const handleDecreament = () => {
    dispatch(decreament());
  };

  const handleIncreamentByValue = () => {
    dispatch(increamentByvalue(+inputValue));
    setInputValue(0);
  };

  const handleDecreamentByValue = () => {
    dispatch(decreamentByValue(+inputValue));
    setInputValue(0);
  };

  const handleReset = () => {
    dispatch(reset());
    setInputValue(0);
  };
  return (
    <div>
      <div className="parent">
        <h1 className="header">COUNTER APP</h1>
        <button className="btn" onClick={handleIncreament}>
          +
        </button>
        <span
          className="count"
          style={{
            color:
              count >= 0 && count <= 10
                ? "green"
                : count >= 11 && count <= 20
                ? "yellow"
                : "red",
          }}
        >
          {count}
        </span>

        <button className="btn" onClick={handleDecreament}>
          -
        </button>
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button className="submit" onClick={handleIncreamentByValue}>
          Add
        </button>
        <button className="submit" onClick={handleDecreamentByValue}>
          Substract
        </button>
      </div>
    </div>
  );
}

export default App;
