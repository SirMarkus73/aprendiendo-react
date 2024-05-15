import { PLAYS } from "../consts.js";

export function saveGame(board, turn) {
  localStorage.setItem("board", JSON.stringify(board));
  localStorage.setItem("turn", turn);
}

export function removeGame() {
  localStorage.removeItem("board");
  localStorage.removeItem("turn");
}

export function loadBoard() {
  const boardFromLocalStorage = localStorage.getItem("board");

  return boardFromLocalStorage
    ? JSON.parse(boardFromLocalStorage)
    : Array(9).fill(null);
}

export function loadTurn() {
  const turnFromLocalStorage = localStorage.getItem("turn");

  return turnFromLocalStorage ?? PLAYS.X;
}
