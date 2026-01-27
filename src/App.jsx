import { useState } from "react";

import "./App.css";
import Scores from "./components/Score";
import Gameplay from "./components/Gameplay";
import Rules from "./components/Rules";
import Picked from "./components/Picked";
import AfterPicking from "./components/AfterPicking";
import WinorLose from "./components/WinorLose";

function App() {
  //Opening and closing the Game Rules
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const toggleRules = () => {
    setIsRulesOpen(!isRulesOpen);
  };

  const [items, setItems] = useState([
    {
      name: "rock",
      id: 1,
      mainColour: "#dc2e4eff",
      wrapperColour: "#9c1633ff",
      imageSource: "/images/icon-rock.svg",
    },
    {
      name: "scissor",
      id: 2,
      mainColour: "#ec9e0eff",
      wrapperColour: "#c56b1bff",
      imageSource: "/images/icon-scissors.svg",
    },
    {
      name: "paper",
      id: 3,
      mainColour: "#4865f4ff",
      wrapperColour: "#2a46c0ff",
      imageSource: "/images/icon-paper.svg",
    },
  ]);

  const [selected, setSelected] = useState([{ user: "", host: "" }]);

  const select = (itemName) => {
    console.log(itemName);
  };

  return (
    <>
      <div className="bg-linear-to-b from-[#1f3756ff] to-[#141639ff] min-h-screen p-5">
        <Scores />
        <Gameplay items={items} select={select} />
        {/* <Picked /> */}
        {/* <AfterPicking /> */}
        {/* <Rules /> */}
        {/* <WinorLose /> */}
        <div className="pt-18 sm:pt-0">
          <h2
            onClick={toggleRules}
            className="text-center text-xl tracking-[4px] font-semibold text-white border w-35 rounded-md mx-auto sm:mr-0 py-2 hover:cursor-pointer"
          >
            RULES
          </h2>
        </div>
        {isRulesOpen && <Rules toggleRules={toggleRules} />}
      </div>
    </>
  );
}

export default App;
