// react imports
import { useState } from "react";
// component imports
import Scoreboard from "./components/scoreboard";
import Animals from "./components/animals";


const App = ({ animalTemplate }) => {

  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [animals, setAnimals] = useState([...animalTemplate]);

  return (
    <div className="container">
      <Scoreboard bestScore={bestScore} currentScore={currentScore} />
      {animals.map(animal =>
      <Animals key={animal.id} src={animal.src} clicked={animal.clicked} />
      )}
    </div>
  );
}

export default App;
