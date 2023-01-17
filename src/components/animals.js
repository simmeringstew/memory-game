import "../styles/animals.css";

const Animals = ({ animal, src, correctGuess }) => {

    const handleClick = (animal) => {
        console.log(animal);
        if (!animal.clicked) {
            correctGuess(animal);
        }
    }

    return (
        <img src={`${src}`} alt="animal" onClick={() => handleClick(animal)} />
    );
}

export default Animals;
