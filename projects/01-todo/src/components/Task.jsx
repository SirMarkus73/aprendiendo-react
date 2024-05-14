import PropTypes from "prop-types"
import { removeTask } from "../logic.js"

export function Task({ id, title, children }) {
    return (
        <article
            className={
                "flex w-2/3 flex-row justify-around gap-3 border bg-slate-700 p-1 dark:bg-neutral-700"
            }
        >
            <div className={"flex flex-col gap-2"}>
                <h2 className={"font-bold"}>{title}</h2>
                <p>{children}</p>
            </div>
            <div className={"flex flex-col gap-2"}>
                <button
                    onClick={() => {
                        removeTask(id)
                    }}
                >
                    Remove task
                </button>
                <button>Edit task</button>
            </div>
        </article>
    )
}

Task.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}
