import { winnerCombos } from "./consts.js";

export const checkTie = (boardToCheck) => {
  if (boardToCheck.every((square) => square !== null)) return false;
  return null;
};

export const checkWinner = (boardToCheck) => {
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
