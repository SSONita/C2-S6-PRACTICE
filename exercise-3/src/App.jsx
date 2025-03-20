import React, { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState("");
  const [error, setError] = useState(false)

  /* You will need some function to handle the key pressed and button events */
  const sumNum = () =>{
    if(isNaN(num1) || isNaN(num2)){
      setError(true);
      setSum("A and B shall be number!");
    }else{
      setSum(Number(num1) + Number(num2));
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input value={num1} onChange={(e) => 
        setNum1(e.target.value)
      } />

      <label>B =</label>
      <input value={num2} onChange={(e) =>
        setNum2(e.target.value)
      } />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled type="text" value={sum} className={error ? "error" : ""}/>
      <button onClick={sumNum}>Compute</button>
    </main>
  );
}

export default App;
