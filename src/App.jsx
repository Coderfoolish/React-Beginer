import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import ReactLogo from './assets/react.svg'
const App = () => {

  const tandao = "duy tan"
  const age = 23
  
  return (
    <div className="todo-container">
      <div className="todo-title ">Todo list</div>
      <TodoNew/>
      <TodoData
      name = {tandao}
      age = {age} />
      <div className='todo-image'>
        <img src={ReactLogo} className='logo'/>
      </div>
    </div>
  )
}
export default App