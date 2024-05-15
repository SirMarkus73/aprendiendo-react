import { Board } from "./components/Board.jsx";

export function App() {
  return (
    <>
      <h1 className={"bg-slate-700 text-center text-2xl text-orange-700"}>
        Tic Tac Toe
      </h1>
      <Board />
    </>
  );
}
