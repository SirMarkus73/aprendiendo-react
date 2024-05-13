import PropTypes from "prop-types";

export function Task({ title, children }) {
  return (
    <>
      <h2 className={"bg-orange-600"}>{title}</h2>
      <p>{children}</p>
    </>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
