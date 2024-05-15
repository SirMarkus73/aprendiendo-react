import { useState } from "react"

import { TaskCreator } from "./components/TaskCreator.jsx"
import { TaskList } from "./components/TaskList.jsx"
import { getTasks } from "./logic.js"

export function App() {
    const [tasks, setTasks] = useState(getTasks())
    return (
        <>
            <TaskCreator tasks={tasks} setTasks={setTasks} />
            <TaskList tasks={tasks} setTasks={setTasks} />
        </>
    )
}
