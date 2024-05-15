import PropTypes from "prop-types";
import { ShowWiner } from "./ShowWiner.jsx";

export function WinnerModal({ children, winner }) {
  if (winner === null) return;

  const winnerText = winner ? "Victoria de" : "Empate";

  return (
    <section
      className={"absolute left-0 top-0 z-10 h-full w-full bg-[#000000cc]"}
    >
      <div
        className={
          "relative left-1/2 top-1/2 z-20 h-1/2  w-1/2 translate-x-1/2 translate-y-1/2 items-center justify-center bg-slate-900 object-center md:inset-0"
        }
      >
        <div
          className={
            "flex h-full w-full flex-col items-center justify-center gap-5"
          }
        >
          {winnerText}
          <ShowWiner winner={winner} />
          {children}
        </div>
      </div>
    </section>
  );
}

WinnerModal.propTypes = {
  children: PropTypes.node.isRequired,
  winner: PropTypes.any,
};
