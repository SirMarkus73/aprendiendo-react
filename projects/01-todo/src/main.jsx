import React, { useState } from "react"
import ReactDOM from "react-dom/client"

import { TaskCreator } from "./components/TaskCreator.jsx"
import { TaskList } from "./components/TaskList.jsx"
import { getTasks } from "./logic.js"

import "./index.css"
import { App } from "./App.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
