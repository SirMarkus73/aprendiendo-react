import { useEffect } from "react"
import PropTypes from "prop-types"

import Task from "./Task.jsx"

import { saveTasks } from "../logic/localStorageManager.js"
import { editTask, removeTask } from "../logic/todo.js"

function TaskList({ tasks, setTasks }) {
    useEffect(() => {
        saveTasks(tasks)
    }, [tasks])

    const handleRemoveTask = (taskId) => {
        setTasks(removeTask(taskId, tasks))
    }

    const handleEditTask = (taskId) => {
        setTasks(editTask(taskId, tasks))
    }

    return (
        <section
            className={
                "m-3 my-10 flex h-max flex-col items-center gap-4 " +
                "border border-black py-5 dark:border-white"
            }
        >
            <h1 className={"text-start font-mono text-xl font-semibold"}>
                Lista de tareas
            </h1>
            {tasks.map((task) => {
                {
                    if (task) {
                        return (
                            <Task
                                key={task.id}
                                title={task.title}
                                handleEdit={() => {
                                    handleEditTask(task.id)
                                }}
                                handleRemove={() => {
                                    handleRemoveTask(task.id)
                                }}
                            >
                                {task.description}
                            </Task>
                        )
                    }
                }
            })}
        </section>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    setTasks: PropTypes.func.isRequired,
}

export default TaskList
