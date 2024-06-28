import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./App.css";

function App() {
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [interest, setInterest] = useState(0);
  const [isPrinciple, setIsPrinciple] = useState(true);
  const [isRate, setIsRate] = useState(true);
  const [isYear, setIsYear] = useState(true);

  const validateData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    // console.log(!!value.match(/^[0-9]*$/)); // !! converts to Boolean
    if (value.match(/^[0-9]*$/)) {
      if (name == "principle") {
        setPrinciple(value);
        setIsPrinciple(true);
      } else if (name == "rate") {
        setRate(value);
        setIsRate(true);
      } else {
        setYear(value);
        setIsYear(true);
      }
    } else {
      if (name == "principle") {
        setPrinciple(value);
        setIsPrinciple(false);
      } else if (name == "rate") {
        setRate(value);
        setIsRate(false);
      } else {
        setYear(value);
        setIsYear(false);
      }
    }
  };

  const handleReset = () => {
    setPrinciple(0);
    setRate(0);
    setYear(0);
    setIsPrinciple(true);
    setIsRate(true);
    setIsYear(true);
    setInterest(0)
  };

  const handleCalculate = (e) => {
    e.preventDefault()
    if (principle ==""|| rate==""|| year=="") {
      alert("Please fill the form completely.")
    } else {
      setInterest((principle*rate*year)/100)
    }
  };

  return (
    <>
      <div
        style={{ backgroundColor: "black", height: "100vh" }}
        className="d-flex justify-content-center align-items-center w-100 bg-dark"
      >
        <div className="bg-light p-5 rounded" style={{ width: "500px" }}>
          <h1>Simple Interest App</h1>
          <p>Calculate your Simple Interest easily</p>

          <div
            style={{ backgroundColor: "orange", height: "150px" }}
            className="bg-warning mt-5 d-flex justify-content-center align-items-center w-100 rounded flex-column shadow"
          >
            <h1 className="fw-bold"> ₹ {interest}</h1>
            <p>Total Simple Interest</p>
          </div>
          <form className="mt-5" onSubmit={handleCalculate}>
            <div className="mb-3">
              <TextField
                name="principle"
                value={principle || ""}
                onChange={(e) => validateData(e)}
                className="w-100"
                id="outlined-basic"
                label="₹ Principle Amount"
                variant="outlined"
              />
            </div>

            {!isPrinciple && (
              <div>
                <p className="text-danger fw-bolder">*Invalid Input</p>
              </div>
            )}
            <div className="mb-3">
              <TextField
                name="rate"
                onChange={(e) => validateData(e)}
                value={rate || ""}
                className="w-100"
                id="outlined-basic"
                label="Rate of Interest (p.a) %"
                variant="outlined"
              />
            </div>
            {!isRate && (
              <div>
                <p className="text-danger fw-bolder">*Invalid Input</p>
              </div>
            )}
            <div className="mb-3">
              <TextField
                name="year"
                onChange={(e) => validateData(e)}
                value={year || ""}
                className="w-100"
                id="outlined-basic"
                label="Year (Yr)"
                variant="outlined"
              />
            </div>
            {!isYear && (
              <div>
                <p className="text-danger fw-bolder">*Invalid Input</p>
              </div>
            )}

            <div className="mt-4">
              <Stack direction="row" spacing={2}>
                <Button
                  disabled={isPrinciple && isRate && isYear ? false : true}
                  variant="contained"
                  className="bg-success"
                  style={{ height: "60px", width: "200px" }}
                  type="submit"
                >
                  Calculate
                </Button>

                <Button
                  onClick={handleReset}
                  variant="outlined"
                  style={{ height: "60px", width: "200px" }}
                >
                  Reset
                </Button>
              </Stack>
            </div>
          </form>
        </div>
      </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
