import { useState } from 'react'

import './App.css'


// this compon ent renders a todo list, with task name, completion state and uses the ID as key

type Todo = {
  id: number
  name: string
  completed: boolean
}

function App() {   
  const [todoList, setTodoList] = useState<Todo[]>([])

// this function adds the event target to the todoList array
  const addTodo = (event: React.FormEvent) => {
      event.preventDefault()
      const target = event.target as typeof event.target & {
        todo: { value: string }
      }
      const name = target.todo.value
      setTodoList([...todoList, {
        id: todoList.length + 1,
        name: name,
        completed: false
      }])
      // clear the input field after adding the todo
      target.todo.value = ''
    }

  return (
    <>
        <div className='App'>
          <h1>Todo List</h1>
            {/* 
                implement an input field to add new tasks
                implement a button to add the new task
            */}
              <div>
                <form onSubmit={addTodo} > 
                  <input type="text" name='todo'/>
                  <button>Add</button>
                </form>
              </div>




              {todoList.map((todo) => (
                <div key={todo.id}> {todo.name} </div>
              ))}
        </div>
     
    </>
  )
}

export default App
