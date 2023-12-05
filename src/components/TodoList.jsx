import React from "react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ tasks, toggleComplete, deleteTask }) => {
    console.log('tasks in TodoList:', tasks);
    
    return (
        <>
            <div>
                {tasks.map((task) => (
                    <TodoItem
                    key={task.id}
                    task={task}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                    />
                ))}
                
            </div>
        </>
    )
}

export default TodoList;