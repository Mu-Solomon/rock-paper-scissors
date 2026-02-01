import { use, useEffect, useState } from "react";

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

  const [selected, setSelected] = useState({ user: null, host: null });
  const [showResult, setShowResult] = useState(false);
  const [resultText, setResultText] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (selected.host !== null) {
      const timer = setTimeout(() => {
        setShowResult(true);
      }, 1500);

      if (selected.user === null || selected.host === null) {
        setSelected({ user: null, host: null, result: "" });
      } else if (selected.user.name === selected.host.name) {
        setSelected({ ...selected, result: " draw" });
      } else if (
        (selected.user.name === "rock" && selected.host.name === "scissor") ||
        (selected.user.name === "scissor" && selected.host.name === "paper") ||
        (selected.user.name === "paper" && selected.host.name === "rock")
      ) {
        setScore(score + 1);
        setSelected({ ...selected, result: "you win" });
      } else {
        setScore(score - 1);
        setSelected({ ...selected, result: "you lose" });
      }

      return () => clearTimeout(timer);
    }
  }, [selected.host]);

  const select = (itemName) => {
    const selectedItem = items.find((item) => item.name === itemName);
    setSelected({ user: selectedItem, host: null });

    const selectedHostItem = items[Math.floor(Math.random() * items.length)];
    // const selectedHostItem = items[0];
    setTimeout(() => {
      setSelected({ user: selectedItem, host: selectedHostItem });
    }, 2000);
  };

  const hasUserSelected = selected.user;

  const playAgain = () => {
    setSelected({ user: null, host: null });
    setShowResult(false);
  };

  if (hasUserSelected === null) {
    return (
      <div className="bg-linear-to-b from-[#1f3756ff] to-[#141639ff] min-h-screen p-5">
        <Scores score={score} />

        <Gameplay items={items} select={select} />

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
    );
  }
  if (hasUserSelected !== null && selected.host == null) {
    return (
      <div className="bg-linear-to-b from-[#1f3756ff] to-[#141639ff] min-h-screen p-5">
        <Scores score={score} />

        <Picked selected={selected} />

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
    );
  } else if (selected.host !== null && showResult) {
    return (
      <div className="bg-linear-to-b from-[#1f3756ff] to-[#141639ff] min-h-screen p-5">
        <Scores score={score} />

        <WinorLose
          selected={selected}
          resultText={resultText}
          playAgain={playAgain}
        />

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
    );
  } else {
    return (
      <div className="bg-linear-to-b from-[#1f3756ff] to-[#141639ff] min-h-screen p-5">
        <Scores score={score} />

        <Picked selected={selected} />

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
    );
  }
}

export default App;
