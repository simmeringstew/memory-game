import "../styles/scoreboard.css";

const Scoreboard = ({ bestScore, currentScore }) => {
    return (
        <div className="scoreboard">
            <h1>Animal Memory Game</h1>
            <div className="score-counters">
                <p>Best Score: {bestScore}</p>
                <p>Current Score: {currentScore}</p>
            </div>
        </div>
    );
}

export default Scoreboard;
