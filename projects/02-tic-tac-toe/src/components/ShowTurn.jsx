import PropTypes from "prop-types";
import { bgPlays, PLAYS } from "../consts.js";

export function ShowTurn({ turn }) {
  const playX = turn === PLAYS.X ? bgPlays : "";
  const playO = turn === PLAYS.O ? bgPlays : "";

  return (
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
};
