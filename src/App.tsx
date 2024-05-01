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

  const toggleCompleted = (id: number) => {
    setTodoList(todoList.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }
  
  const deleteItem = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id))
  } 

  return (
    <>
        <div className='App'>
          <h1>Todo List</h1>

              <div>
                <form onSubmit={addTodo} > 
                  <input type="text" name='todo'/>
                  <button>Add</button>
                </form>
              </div>

              {todoList.map((todo) => (
                <div key={todo.id}> 
                {/* this checkbox should triggerr the item update on the property completed */}

                    <input type='checkbox' checked={todo.completed} onChange={() => {toggleCompleted(todo.id)}}/>
                    {todo.name} 
                    {/* create a button to delete the current item */}
                    <button onClick={()=>{deleteItem(todo.id)}}>Delete</button>
                </div>
              ))}
        </div>
     
    </>
  )
}

export default App
