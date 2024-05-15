import PropTypes from "prop-types"
import { removeTask, editTask } from "../logic/todo.js"
import DeleteIcon from "./icons/DeleteIcon.jsx"
import EditIcon from "./icons/EditIcon.jsx"

export function Task({ id, title, children, tasks, setTasks }) {
    const handleEdit = () => {
        const newTasks = editTask(id, tasks)
        setTasks(newTasks)
    }

    const handleRemove = () => {
        const newTasks = removeTask(id, tasks)
        setTasks(newTasks)
    }

    return (
        <article
            className={
                "border-dark dark: flex w-2/3 grid-rows-2 flex-col justify-between gap-3 border bg-neutral-400  p-2 dark:border-white dark:bg-neutral-700  lg:flex-row"
            }
        >
            <div
                className={
                    " flex w-2/3 flex-col flex-wrap justify-center gap-2 break-words"
                }
            >
                <h2
                    className={"text-balance break-words text-center font-bold"}
                >
                    {title}
                </h2>
                <p className={"h-max max-w-full text-pretty break-words"}>
                    {children}
                </p>
            </div>
            <div className={"flex flex-row justify-around  gap-5 lg:flex-col"}>
                <label
                    className={
                        "flex w-36 cursor-pointer flex-row gap-2 md:justify-between"
                    }
                >
                    <button onClick={handleRemove}>Remove task</button>
                    <DeleteIcon className={"w-8"} />
                </label>
                <label
                    className={
                        "flex w-36 cursor-pointer flex-row gap-2 md:justify-between"
                    }
                >
                    <button onClick={handleEdit}>Edit task</button>
                    <EditIcon className={"w-8"} />
                </label>
            </div>
        </article>
    )
}

Task.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
    setTasks: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}
