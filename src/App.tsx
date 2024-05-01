import { useState } from 'react'

import './App.css'


// this compon ent renders a todo list, with task name, completion state and uses the ID as key

type Todo = {
  id: string
  name: string
  completed: boolean
}

function App() {
   
  const [todoList, setTodoList] = useState<Todo[]>([])

  return (
  
        <div className='App'>
          <h1>Todo List</h1>
              {todoList.map((todo) => (
                <div key={todo.id}> {todo.name} </div>
              ))}
        </div>
     
    
  )
}

export default App
