import "../styles/animals.css";

const Animals = ({ animal, src, correctGuess, wrongGuess }) => {

    const handleClick = (animal) => {
        console.log(animal);
        if (!animal.clicked) {
            correctGuess(animal);
        }
        else {
            wrongGuess();
        }
    }

    return (
        <img src={`${src}`} alt="animal" onClick={() => handleClick(animal)} />
    );
}

export default Animals;
