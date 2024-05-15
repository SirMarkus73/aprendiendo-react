import PropTypes from "prop-types";
import { PLAYS } from "../consts.js";

export function ShowTurn({ turn, prevTurn = null }) {
  const playX = turn === PLAYS.X ? "bg-orange-400" : "";
  const playO = turn === PLAYS.O ? "bg-orange-400" : "";

  return prevTurn === null ? (
    <section
      className={
        "grid h-10 w-10 place-items-center rounded-lg border border-white bg-orange-400 text-black"
      }
    >
      {turn}
    </section>
  ) : (
    <section className={"flex flex-row items-center justify-center gap-5 "}>
      <p
        className={
          "grid h-10 w-10 place-items-center border border-white " + playX
        }
      >
        {PLAYS.X}
      </p>
      <p
        className={
          "grid h-10 w-10 place-items-center border border-white " + playO
        }
      >
        {PLAYS.O}
      </p>
    </section>
  );
}

ShowTurn.propTypes = {
  turn: PropTypes.string.isRequired,
  prevTurn: PropTypes.bool,
};
