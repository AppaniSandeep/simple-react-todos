import React, {useState,useEffect} from 'react';

import "./index.css"

const TodoItem = ({isTodoAdded,setIsTodoAdded}) => {

    const [todos,setTodos] = useState([])
    const [loading,setLoading] = useState(true)



    const fetchTodos = async () => {
        const response = await fetch("https://simpletodos-06ex.onrender.com/todos")
        const data = await response.json()
        console.log(data)
        setTodos(data)
        setLoading(false)

    }

    useEffect(() => {
        fetchTodos()
    },[isTodoAdded])

    const deleteTodo = async (id) => {
        let url = `https://simpletodos-06ex.onrender.com/todos/${id}`;
        const response = await fetch(url,{
            method:"DELETE"
        })
        if (response.ok){
            setTodos((prevTodos) => prevTodos.filter(eachTodo => eachTodo.id !== id))
            setIsTodoAdded(!isTodoAdded)
        }
    }

    

  return (
    <div className='todos-bg-container'>
      {loading ? <p>Loading</p> : ((todos.length) === 0 ? <p>No Todos</p> : (<ul className='todos-list'>
            {todos.map((todo) => 
                <li key = {todo.id} className='list-item'>
                    <span className='title'>{todo.title}</span>
                    <button type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
            )}
        </ul>)
        
      )}

    </div>
  )
}

export default TodoItem
