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

/**
 * Adds a new todo item to the todoList state.
 *
 * @param {React.FormEvent} event - The form event triggered by submitting the todo input.
 * @return {void} This function does not return anything.
 */
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

/**
 * Toggles the completion status of a todo item with the given ID.
 *
 * @param {number} id - The ID of the todo item to toggle.
 * @return {void} This function does not return anything.
 */
  const toggleCompleted = (id: number) => {
    setTodoList(todoList.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }
  
  /**
   * Deletes an item from the todo list based on its ID.
   *
   * @param {number} id - The ID of the item to be deleted.
   * @return {void} This function does not return anything.
   */
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
                <div key={todo.id} className='item'> 
                {/* this checkbox should triggerr the item update on the property completed */}

                    <input type='checkbox' checked={todo.completed} onChange={() => {toggleCompleted(todo.id)}}/>
                    <span className={todo.completed ? 'completed' : ''} >{todo.name}</span>
                    {/* create a button to delete the current item */}
                    <button onClick={()=>{deleteItem(todo.id)}}>Delete</button>
                </div>
              ))}
        </div>
     
    </>
  )
}

export default App
