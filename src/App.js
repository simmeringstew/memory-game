// react imports
import { useState } from "react";
// component imports
import Scoreboard from "./components/scoreboard";


const App = ({ animalTemplate }) => {

  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <div className="container">
      <Scoreboard bestScore={bestScore} currentScore={currentScore} />
    </div>
  );
}

export default App;
