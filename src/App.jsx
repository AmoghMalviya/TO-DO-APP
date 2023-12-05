import { useState } from 'react'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [tasks , setTasks] = useState([])
  const [eachTask , setEachTask] = useState('')
  
  const addTask = () => {
    if(eachTask.trim() !== ''){
      const eachTaskObj = {
        id: Date.now(),
        text: eachTask,
        completed: false
      };
      setTasks([...tasks,eachTaskObj])
      setEachTask('')
    } 
  }

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task)=>(
      task.id === taskId ? {...task,completed: !task.completed} :task
    ))
    setTasks(updatedTasks)
    
  }

  const deleteTask = (taskId) => {
    const updatedTasksList = tasks.filter((task) => (
      task.id !== taskId
    ))
    setTasks(updatedTasksList)
  }



  return (
    <>
      <div>
        <h1>To Do App</h1>
        <input
        type='text' 
        value={eachTask}
        onChange={(e) => setEachTask(e.target.value)}
        />
        <button 
        onClick={addTask}>
          Add Task
        </button>
        <TodoList
        tasks={tasks} 
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        />
      </div>
    </>
  )
}

export default App
