import { useState, useEffect } from "react";
import { add } from "./StringCalculator";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    try {
      setError("");
      setResult(add(input));
    } catch (error) {
      setError(error.message);
    }
  };

  const reset = () => {
    setInput(""); // Clear the input state
    setResult(""); // Clear the result state
    setError(""); // Clear any errors
  };
  return (
    <div className=" ">
      <div className="bg-primary p-1">
        <h2 className=" text-white fw-bold">Add Numbers</h2>
      </div>
      <div className="text-center">
        <div className="mt-3 mb-3 p-4">
          {error && <div className="alert alert-danger">{error}</div>}
          <input
            name="number"
            className="form-control"
            placeholder="Enter Number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            disabled={input ? false : true}
            onClick={handleClick}
            className="me-2 mt-4 mb-4 btn btn-success"
          >
            Add
          </button>
          <button onClick={reset} className="mt-4 mb-4 btn btn-success">
            Clear
          </button>
          {result && <div className="alert alert-success">{result}</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
