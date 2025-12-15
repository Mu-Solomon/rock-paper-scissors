import { useState } from "react";

import "./App.css";
import Scores from "./components/Score";
import Gameplay from "./components/Gameplay";
import Rules from "./components/Rules";

function App() {
  return (
    <>
      <div>
        <Scores />
        <Gameplay />
        <Rules />
      </div>
    </>
  );
}

export default App;
