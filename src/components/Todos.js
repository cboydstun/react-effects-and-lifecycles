import React, {useState, useEffect} from 'react'

export default function Todos(props) {
const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setTodos(data)
      })
  }, [])
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h2>Task: {todo.title}</h2>
          </div>
        )
      })}
    </div>
  )
}
