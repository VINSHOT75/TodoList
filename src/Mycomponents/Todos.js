import React from 'react'
import Todoitem from "./todoitem";

export const Todos = ({todos,onDelete}) => {
    return (
        <div className = "container">
            <h3 className="text-center my-3" >to doos</h3>
            {todos.length===0?<h1>Nothing to display</h1>:
            todos.map((todo) => {
                return <Todoitem todo={ todo } key = {todo.sno} onDelete={onDelete} />
            })}
                     </div>
    )
}
