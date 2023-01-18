import "../styles/modal.css";

const Modal = ({ currentScore, reset }) => {
    if (currentScore !== 12) {
        return (
            <div></div>
        );
    }
    return (
        <div className="modal">
            <h2>You Win!</h2>
            <button onClick={reset}>Play Again!</button>
        </div>
    );
}

export default Modal;
