import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import ReactLogo from './assets/react.svg'
import { useState } from 'react'
const App = () => {

  const tandao = "duy tan"
  const age = 23
  const [todoList , setTodoList] = useState([
  {id : 1 , name: "abc"} , 
  {id : 2 , name: "cdm"}
  ])
  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }
  return (
    <div className="todo-container">
      <div className="todo-title ">Todo list</div>
      <TodoNew
       addNewTodo = {addNewTodo} 
       />
      <TodoData
      name = {tandao}
      age = {age} 
      todoList={todoList}
       />
      <div className='todo-image'>
        <img src={ReactLogo} className='logo'/>
      </div>
    </div>
  )
}
export default App