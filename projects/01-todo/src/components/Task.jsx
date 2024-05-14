import PropTypes from "prop-types"
import { removeTask, editTask } from "../logic.js"
import { DeleteIcon } from "./icons/DeleteIcon.jsx"
import { EditIcon } from "./icons/EditIcon.jsx"

export function Task({ id, title, children }) {
    return (
        <article
            className={
                "flex w-2/3 flex-col justify-around gap-3 border " +
                "border-black bg-neutral-400 p-1 text-center md:flex-row dark:bg-neutral-700"
            }
        >
            <div className={"flex flex-col gap-2"}>
                <h2 className={"font-bold"}>{title}</h2>
                <p>{children}</p>
            </div>
            <div className={"flex flex-row justify-around gap-2 md:flex-col"}>
                <label
                    className={"flex w-36 flex-row gap-2 md:justify-between"}
                >
                    <button
                        onClick={() => {
                            removeTask(id)
                        }}
                    >
                        Remove task
                    </button>
                    <DeleteIcon className={"w-8"} />
                </label>
                <label
                    className={"flex w-36 flex-row gap-2 md:justify-between"}
                >
                    <button
                        onClick={() => {
                            editTask(id)
                        }}
                    >
                        Edit task
                    </button>
                    <EditIcon className={"w-8"} />
                </label>
            </div>
        </article>
    )
}

Task.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}
