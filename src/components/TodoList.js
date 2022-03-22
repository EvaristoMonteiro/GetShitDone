import React, { useState, useEffect, useRef, Component } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'
import axios from 'axios';

function TodoList() {
    const [todos, setTodos] = useState([]);

    //useEffect(() => {
    //    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=8').then(result => {
    //        setTodos(result.data)
    //    })
    //    console.log(todos)
    //})

    const addTodo = todo => {
        if(!todo.text || /ˆ\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /ˆ\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo
    });

    setTodos(updatedTodos);
};

  return (
    <div>
        <h1 className='bora'>Bora! O que tu tem pra fazer?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default TodoList;