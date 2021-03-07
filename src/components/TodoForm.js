import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
const [input, setInput] = useState(props.edit ? props.edit.value : '');

const inputRef = useRef(null)

useEffect(() => {
    inputRef.current.focus()
})

const handleChange = e => {
    setInput(e.target.value);
    }

const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    });
    }
    return (
        <div>
            <form className="todo__form" onSubmit={handleSubmit}>
                {props.edit ? (
                    <>
                                <input 
                                type="text" 
                                placeholder="Update your item" 
                                value={input} 
                                name="text" 
                                className="todo__input edit" 
                                onChange={handleChange}
                                ref={inputRef}
                                />
                
                                <button className="todo__button edit">Update</button>
                                </>
                ) : (
                    <>
                    <input 
                    type="text" 
                    placeholder="Add a To-Do" 
                    value={input} 
                    name="text" 
                    className="todo__input" 
                    onChange={handleChange}
                    ref={inputRef}
                />

                <button className="todo__button">Add To-Do</button>
                </>
                )}


            </form>
        </div>
    )
}

export default TodoForm
