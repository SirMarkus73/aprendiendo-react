import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Board } from "./components/Board.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 className={"text-center text-2xl text-orange-700 bg-slate-700"}>Tic Tac Toe</h1>
    <Board/>
  </React.StrictMode>,
)
