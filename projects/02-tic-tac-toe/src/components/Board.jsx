import { Square } from "./Square.jsx";
import { useState } from "react";

export function Board() {
  const PLAYS = {
    X: "X",
    O: "O",
    TIE: "tie",
  };

  const [turn, setTurn] = useState(PLAYS.X);
  const [board, SetBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    const winnerCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 4, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];

    winnerCombos.forEach((combo) => {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[b] === boardToCheck[c]
      ) {
        setWinner(boardToCheck[a]);
        return boardToCheck[a];
      }
    });

    return null;
  };

  const updateBoard = (index) => {
    // Si se intenta modificar una casilla con contenido
    // o si ya se ha ganado retorna
    if (board[index] || winner) return;
    let newBoard = [...board];
    newBoard[index] = turn;
    SetBoard(newBoard);

    checkWinner(newBoard);

    const newTurn = turn === PLAYS.X ? PLAYS.O : PLAYS.X;
    setTurn(newTurn);
  };

  return (
    <>
      <article>
        <section
          className={"mx-auto my-5 grid w-max grid-cols-3 gap-3 text-center"}
        >
          {board.map((play, index) => {
            return (
              <Square
                key={index}
                index={index}
                play={play}
                handleBoxClick={updateBoard}
              >
                {board[index]}
              </Square>
            );
          })}
        </section>
        <section className={"text-center"}>Turno de {turn}</section>
      </article>

      {winner !== null && (
        <div
          className={
            "absolute left-1/2 top-1/2 z-50 h-1/2  w-1/2 translate-x-1/2 translate-y-1/2 items-center justify-center overflow-y-auto overflow-x-hidden bg-slate-900 object-center md:inset-0"
          }
        >
          <div className={"flex h-full w-full items-center justify-center"}>
            victoria del jugador {winner}
          </div>
        </div>
      )}
    </>
  );
}
