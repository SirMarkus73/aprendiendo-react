import PropTypes from "prop-types";

export function ShowWiner({ winner }) {
  if (winner === null || winner === false) return;

  return (
    <section
      className={
        "grid h-10 w-10 place-items-center rounded-lg border border-white bg-orange-400 text-black"
      }
    >
      {winner}
    </section>
  );
}

ShowWiner.propTypes = {
  winner: PropTypes.any,
};
