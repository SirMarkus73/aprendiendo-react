import { winnerCombos } from "../consts.js";

export const checkTieFrom = (boardToCheck, setWinner) => {
  if (boardToCheck.every((square) => square !== null)) {
    setWinner(false);
    return true;
  }
  return null;
};

export const checkWinnerFrom = (boardToCheck, setWinner) => {
  for (const combo of winnerCombos) {
    const [a, b, c] = combo;

    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[b] === boardToCheck[c]
    ) {
      const winner = boardToCheck[a];
      setWinner(winner);
      return winner;
    }
  }

  return null;
};
