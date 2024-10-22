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
    const newTodo = {
      id : randomIntFromInterval(1 , 1000000),
      name: name 
    }
    setTodoList([...todoList , newTodo])
  }
  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
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