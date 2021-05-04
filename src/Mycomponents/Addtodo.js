import React from 'react'
import { useState } from 'react';

export const Addtodo = (props) => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("title desc cant be blankk")
        }

        props.addTodo(title, desc)
        settitle("")
        setdesc("")
    }
    return (
        <div className="container">
            <h5>Add a todo</h5>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Add todo</label>
                    <input type="text" value={desc} onChange={(e)=>setdesc(e.target.value)} className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-success ">Add Todo</button>
            </form>
        </div>
    )
}
