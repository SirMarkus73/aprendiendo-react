import { useEffect, useState } from "react";

import { Board } from "./components/Board.jsx";
import { ResetButton } from "./components/ResetButton.jsx";
import { ShowTurn } from "./components/ShowTurn.jsx";
import { WinnerModal } from "./components/WinnerModal.jsx";

import { loadBoard, loadTurn, saveGame } from "./logic/gameProgression.js";

export function App() {
  const [turn, setTurn] = useState(loadTurn());
  const [board, setBoard] = useState(loadBoard());
  const [winner, setWinner] = useState(null);

  // Cuando cambie de turno o tablero guarda partida
  useEffect(() => {
    saveGame(board, turn);
  }, [board, turn]);

  return (
    <main className={"grid place-items-center gap-5"}>
      <h1
        className={"w-full bg-slate-700 text-center text-2xl text-orange-700"}
      >
        Tic Tac Toe
      </h1>
      <section>
        <ResetButton
          setTurn={setTurn}
          setBoard={setBoard}
          setWinner={setWinner}
        />
        <Board
          turnState={[turn, setTurn]}
          boardState={[board, setBoard]}
          winnerState={[winner, setWinner]}
        />
        <ShowTurn turn={turn} />
        <WinnerModal winner={winner}>
          <ResetButton
            setTurn={setTurn}
            setBoard={setBoard}
            setWinner={setWinner}
          />
        </WinnerModal>
      </section>
    </main>
  );
}
