import { useState } from "react"

import { TaskCreator } from "./components/TaskCreator.jsx"
import { TaskList } from "./components/TaskList.jsx"
import { Header } from "./components/Header.jsx"
import { getTasks } from "./logic/localStorageManager.js"

export function App() {
    const [tasks, setTasks] = useState(getTasks())
    return (
        <>
            <Header />
            <main>
                <TaskCreator
                    tasks={tasks}
                    setTasks={setTasks}
                    className={"mt-28"}
                />
                <TaskList tasks={tasks} setTasks={setTasks} />
            </main>
        </>
    )
}
