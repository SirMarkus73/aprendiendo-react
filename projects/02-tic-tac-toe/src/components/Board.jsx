import PropTypes from "prop-types";
import confetti from "canvas-confetti";

import { Square } from "./Square.jsx";
import { PLAYS } from "../consts.js";
import { checkTie, checkWinner } from "../logic.js";

export function Board({ turnState, boardState, winnerState }) {
  const [turn, setTurn] = turnState;
  const [board, setBoard] = boardState;
  const [winner, setWinner] = winnerState;

  const updateBoard = (index) => {
    // Si se intenta modificar una casilla con contenido
    // o si ya se ha ganado retorna
    if (board[index] || winner) return;
    let newBoard = [...board];
    newBoard[index] = turn;

    setBoard(newBoard);

    if (checkWinner(newBoard)) {
      confetti();
      setWinner(checkWinner(newBoard));
    } else if (checkTie(newBoard) === false) {
      setWinner(checkTie(newBoard));
    }

    const newTurn = turn === PLAYS.X ? PLAYS.O : PLAYS.X;
    setTurn(newTurn);
  };

  return (
    <section
      className={"mx-auto my-5 grid w-max grid-cols-3 gap-3 text-center"}
    >
      {board.map((play, index) => {
        return (
          <Square key={index} index={index} handleBoxClick={updateBoard}>
            {play}
          </Square>
        );
      })}
    </section>
  );
}

Board.propTypes = {
  turnState: PropTypes.array.isRequired,
  boardState: PropTypes.array.isRequired,
  winnerState: PropTypes.array.isRequired,
};
