import { Square } from "./Square.jsx";
import { useState } from "react";
import { winnerCombos, PLAYS } from "../consts.js";
import { ShowTurn } from "./ShowTurn.jsx";
import { ResetButton } from "./ResetButton.jsx";
import { WinnerModal } from "./WinnerModal.jsx";

export function Board() {
  const [turn, setTurn] = useState(PLAYS.X);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    for (const combo of winnerCombos) {
      const [a, b, c] = combo;

      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[b] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }

    return null;
  };

  const checkTie = (boardToCheck) => {
    if (boardToCheck.every((square) => square !== null)) return false;
    return null;
  };

  const updateBoard = (index) => {
    // Si se intenta modificar una casilla con contenido
    // o si ya se ha ganado retorna
    if (board[index] || winner) return;
    let newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    if (checkWinner(newBoard)) {
      setWinner(checkWinner(newBoard));
    } else if (checkTie(newBoard) === false) {
      setWinner(checkTie(newBoard));
    }

    const newTurn = turn === PLAYS.X ? PLAYS.O : PLAYS.X;
    setTurn(newTurn);
  };

  const resetGame = () => {
    setWinner(null);
    setBoard(Array(9).fill(null));
    setTurn(PLAYS.X);
  };

  return (
    <>
      <article
        className={"z-0 flex flex-col items-center justify-center gap-3 pt-2"}
      >
        <ResetButton resetFunction={resetGame} />
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

        <ShowTurn turn={turn} prevTurn={true} />

        <WinnerModal winner={winner}>
          <ResetButton resetFunction={resetGame} />
        </WinnerModal>
      </article>
    </>
  );
}
