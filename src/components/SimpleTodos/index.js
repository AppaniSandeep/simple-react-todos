import React from 'react'
import TodoItem from '../TodoItem'

import "./index.css"

const SimpleTodos = ({isTodoAdded,setIsTodoAdded}) => {
  return (
    <div className='bg-container'>
      <h1 className='heading'>Simple Todos</h1>
      <div className='todo-items-wrapper'>
        <TodoItem isTodoAdded={isTodoAdded} setIsTodoAdded={setIsTodoAdded}/>
      </div>
    </div>
  )
}

export default SimpleTodos
