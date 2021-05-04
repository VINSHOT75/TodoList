import React from 'react'

export default function todoitem({todo, onDelete }) {
    return (
        <div>
            <h4>{todo.title}</h4>
            <h6>{todo.desc}</h6>
            <button className="btn btn-sm btn-success" onClick={()=> { onDelete(todo) }} >delete</button>
        </div>
    )
}
