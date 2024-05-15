import PropTypes from "prop-types";

export function ResetButton({ resetFunction }) {
  return (
    <button
      onClick={resetFunction}
      className={
        "rounded-full border border-white p-2 transition-colors hover:bg-orange-400 hover:text-black"
      }
    >
      Reiniciar el juego
    </button>
  );
}

ResetButton.propTypes = {
  resetFunction: PropTypes.func.isRequired,
};
