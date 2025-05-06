import React,{useState} from 'react'
import SimpleTodos from '../SimpleTodos'

import "./index.css";


function AddTodo() {
    const [todo,setTodo] = useState("")
    const [isTodoAdded,setIsTodoAdded] = useState(false)

    const addTodo = async () => {
        if (!todo){
            alert("Please enter the todo")
            return;
        }
        try{
            let url = "https://simpletodos-06ex.onrender.com/todos";

            const response = await fetch(url, {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({title:todo})
            })
            if (response.ok){
                setTodo("")
                setIsTodoAdded(!isTodoAdded)
            }

        }catch(error){
            console.error(error)
        }
    }

    function handleChangeInput (event) {
        setTodo(event.target.value)

    }
  return (
    <div>
      <h1 className='add-todo-heading'>Add Todos</h1>
        <div className='add-todo-form'>
            <input type="text" placeholder='Enter your todo' onChange={handleChangeInput} value={todo} className='input-element'/>
            <button type="button" onClick={addTodo} className='btn-add-todo'>Add Todo</button>
        </div>
        <hr/>
        <SimpleTodos isTodoAdded={isTodoAdded} setIsTodoAdded={setIsTodoAdded}/>
    </div>
  )
}

export default AddTodo
