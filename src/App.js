// react imports
import { useState } from "react";
// component imports
import Scoreboard from "./components/scoreboard";
import Animals from "./components/animals";


const App = ({ animalTemplate }) => {

  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [animals, setAnimals] = useState(animalTemplate.map(animal => ({...animal})));

  const correctGuess = (animal) => {
    const copy = [...animals];
    const toChange = copy.filter(item => item.id === animal.id);
    toChange[0].clicked = true;
    setAnimals(copy.map(item => item.id !== toChange[0].id ? item : toChange[0]));
    const updatedScore = currentScore + 1;
    setCurrentScore(updatedScore);
    if (updatedScore > bestScore) {
      setBestScore(updatedScore);
    }
  }

  const wrongGuess = () => {
    setAnimals(animalTemplate.map(animal => ({...animal})));
    setCurrentScore(0);
  }

  return (
    <div className="container">
      <Scoreboard bestScore={bestScore} currentScore={currentScore} />
      <div className="animal-container">
        {animals.map(animal =>
        <Animals key={animal.id} animal={animal} src={animal.src} correctGuess={correctGuess} wrongGuess={wrongGuess} />
        )}
      </div>
    </div>
  );
}

export default App;
