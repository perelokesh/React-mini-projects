import './App.css';
import { useState } from "react";
import Keypad from "./components/keypad";
 
function App(){
  const [input, setInput] = useState('');
  const handleClick = (value) => {
    setInput(input + value);
  }
  const handleEqual = () => {
    setInput(eval(input).toString());
  }
  const handleClear = () => {
    setInput("");
  };
  return (
    <div className= "App">
      <div className= "calculator">
        <input className="display" type="text" value={input} readOnly />
        <Keypad
        handleClear= {handleClear}
        handleEqual= {handleEqual}
        handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default App;