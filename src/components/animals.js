import "../styles/animals.css";

const Animals = ({ src, clicked }) => {
    return (
        <img src={`${src}`} alt="animal" />
    );
}

export default Animals;
