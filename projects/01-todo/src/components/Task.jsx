import PropTypes from "prop-types"

export function Task({ title, children }) {
    return (
        <article
            className={"flex w-2/3 flex-col gap-3 border bg-neutral-700 p-1 "}
        >
            <h2 className={"font-bold"}>{title}</h2>
            <p>{children}</p>
        </article>
    )
}

Task.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}
