import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function changeCount() {
    setCount(count + 2);
  }

  return (
    <>
      <p className="text-6xl">Rock Paper Scissors</p>
    </>
  );
}

export default App;
