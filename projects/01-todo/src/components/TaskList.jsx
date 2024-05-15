import PropTypes from "prop-types"
import { Task } from "./Task.jsx"

export function TaskList({ tasks, setTasks }) {
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
                                id={task.id}
                                title={task.title}
                                tasks={tasks}
                                setTasks={setTasks}
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
