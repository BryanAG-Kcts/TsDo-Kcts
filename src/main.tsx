import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToDoUI } from './ToDoUI.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToDoUI />
  </React.StrictMode>
)
