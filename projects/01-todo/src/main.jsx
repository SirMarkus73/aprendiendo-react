import React from "react"
import ReactDOM from "react-dom/client"
import { Task } from "./components/Task.jsx"
import { TaskCreator } from "./components/TaskCreator.jsx"

import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <TaskCreator />
        <Task title={"Pasear al perro"}>
            Que no se me olvide pasear el perro a las 8:00
        </Task>
    </React.StrictMode>,
)
