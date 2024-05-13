import PropTypes from "prop-types";

export function Task({ title, children }) {
  return (
    <article className={"p-1 flex flex-col border bg-neutral-700 w-2/3 gap-3"}>
      <h2 className={"font-bold"}>{title}</h2>
      <p>{children}</p>
    </article>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
