import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti'   
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todo({todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit ({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit = {edit}
        onSubmit={submitUpdate}
        />
    }

    return todos.map((todo, index) => (
        <div 
            className={todo.isComplete ? 'todo__row complate' : 'todo__row'} 
            key={index}
        >

                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>

                <div className="icons">
                    <RiCloseCircleLine 
                    onClick={() => removeTodo(todo.id)} 
                    className="delete__icon"
                    />
                    <TiEdit 
                    onClick={() => setEdit({ id: todo.id, value: todo.text })} 
                    className="edit__icon"                    
                    />
                </div>
        </div>
    ))
}

export default Todo
