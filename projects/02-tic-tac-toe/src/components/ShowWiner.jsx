import PropTypes from "prop-types";
import { bgPlays } from "../consts.js";

export function ShowWinner({ winner }) {
  if (winner === null || winner === false) return;

  return (
    <section
      className={`grid h-10 w-10 place-items-center rounded-lg border border-white text-black ${bgPlays}`}
    >
      {winner}
    </section>
  );
}

ShowWinner.propTypes = {
  winner: PropTypes.any,
};
