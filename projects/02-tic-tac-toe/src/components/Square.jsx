import PropTypes from "prop-types";

export function Square({ children, handleBoxClick, index }) {
  const handleClick = () => {
    handleBoxClick(index);
  };

  const pointer = children === null ? "cursor-pointer" : "cursor-not-allowed";

  return (
    <div
      className={`flex h-10 w-10 items-center justify-center border border-white ${pointer}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}

Square.propTypes = {
  index: PropTypes.number.isRequired,
  handleBoxClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};
