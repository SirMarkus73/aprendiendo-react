import PropTypes from "prop-types";
import { PLAYS } from "../consts.js";
import { removeGame } from "../logic/gameProgression.js";

export function ResetButton({ setWinner, setBoard, setTurn }) {
  const resetGame = () => {
    setWinner(null);
    setBoard(Array(9).fill(null));
    setTurn(PLAYS.X);

    removeGame();
  };

  return (
    <button
      onClick={resetGame}
      className={
        "rounded-full border border-white p-2 transition-colors hover:bg-orange-400 hover:text-black"
      }
    >
      Reiniciar el juego
    </button>
  );
}

ResetButton.propTypes = {
  setWinner: PropTypes.func.isRequired,
  setBoard: PropTypes.func.isRequired,
  setTurn: PropTypes.func.isRequired,
};
