import { useState } from "react";

import "./App.css";
import Scores from "./components/Score";
import Gameplay from "./components/Gameplay";
import Rules from "./components/Rules";
import Picked from "./components/Picked";
import AfterPicking from "./components/AfterPicking";
import WinorLose from "./components/WinorLose";

function App() {
  return (
    <>
      <div className="bg-linear-to-b from-[#1f3756ff] to-[#141639ff] h-screen p-5">
        <Scores />
        <Gameplay />
        {/* <Picked /> */}
        {/*  <AfterPicking /> */}
        {/* <Rules /> */}
        {/* <WinorLose /> */}
        <div className="pt-18">
          <h2 className="text-center text-xl tracking-[4px] font-semibold text-white border w-35 rounded-md mx-auto py-2">
            RULES
          </h2>
        </div>
        {/* <Rules /> */}
      </div>
    </>
  );
}

export default App;
