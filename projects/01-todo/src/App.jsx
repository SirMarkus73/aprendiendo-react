import { useState } from "react"

import { TaskCreator } from "./components/TaskCreator.jsx"
import { TaskList } from "./components/TaskList.jsx"
import { Header } from "./components/Header.jsx"
import { getTasks } from "./logic.js"

export function App() {
    const [tasks, setTasks] = useState(getTasks())
    const [darkMode, setDarkMode] = useState(false)
    const HTML = document.querySelector("html")

    if (darkMode === false && HTML.classList.contains("dark")) {
        HTML.classList.remove("dark")
    }

    if (darkMode) {
        HTML.classList.add("dark")
    }

    return (
        <main>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <TaskCreator
                tasks={tasks}
                setTasks={setTasks}
                className={"mt-28"}
            />
            <TaskList tasks={tasks} setTasks={setTasks} />
        </main>
    )
}
