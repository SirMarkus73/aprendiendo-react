import React from "react"
import ReactDOM from "react-dom/client"
import { Task } from "./components/Task.jsx"
import { TaskCreator } from "./components/TaskCreator.jsx"

import "./index.css"
import { getTasks } from "./logic.js"

const tasks = getTasks()

console.log(tasks)

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <TaskCreator />
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
                return (
                    <Task key={task.id} id={task.id} title={task.title}>
                        {task.description}
                    </Task>
                )
            })}
        </section>
    </React.StrictMode>,
)
