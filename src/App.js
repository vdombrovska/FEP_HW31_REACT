import React, {useEffect, useState} from 'react';
import {API_URL} from './components/API';
import './css/App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

let todo;
const ITEM_CLASS ='.task-item';
const DLT_BTN_CLASS = 'btn-delete';

export default function App() {
    const [todos, setTodos] = useState([])

    useEffect( ()=> {
        fetch(API_URL).then(res =>res.json()).then(data=>setTodos(data))
    },[]);

    function createTodo(el){
        const [newTodo,setTodos] = useState([])
        newTodo.id = Date.now ();
        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(newTodo),
            headers: {
                'Content-Type': 'application/json',
            },
        }) .then((res) => res.json()).then(data=>setTodos(data));
    };

    function deleteTodo(todoId) {
        todo= todos.filter(({ id }) => id != todoId);
        fetch(API_URL + todoId, {
            method: 'DELETE',
        });
    };

    function toggleTodo(id) {
        todo = todos.find(item => item.id === id);
        const updatedTodo = { ...todo, completed: !todo.completed};

        fetch(API_URL + todo.id, {
            method: 'PUT',
            body: JSON.stringify(updatedTodo),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        setTodos(todos.map(item => item.id !== id ? item: updatedTodo));
      }

    
    return (
        <>
        <TodoList  todos={todos} onDelete={deleteTodo} onToggle={toggleTodo}/>
        <TodoForm  onSave={createTodo}/>
        </>
    );

}


