import { Board } from "./components/Board.jsx";
import { useState } from "react";
import { PLAYS } from "./consts.js";
import { ResetButton } from "./components/ResetButton.jsx";
import { ShowTurn } from "./components/ShowTurn.jsx";
import { WinnerModal } from "./components/WinnerModal.jsx";

export function App() {
  const [turn, setTurn] = useState(PLAYS.X);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setWinner(null);
    setBoard(Array(9).fill(null));
    setTurn(PLAYS.X);
  };

  return (
    <>
      <main className={"grid place-items-center gap-5"}>
        <h1
          className={"w-full bg-slate-700 text-center text-2xl text-orange-700"}
        >
          Tic Tac Toe
        </h1>
        <section>
          <ResetButton resetFunction={resetGame} />
          <Board
            turnState={[turn, setTurn]}
            boardState={[board, setBoard]}
            winnerState={[winner, setWinner]}
            resetFunc={resetGame}
          />
          <ShowTurn turn={turn} prevTurn={true} />
          <WinnerModal winner={winner}>
            <ResetButton resetFunction={resetGame} />
          </WinnerModal>
        </section>
      </main>
    </>
  );
}
