const TodoData = (props) => {
  //props la` 1 bien ojects 
    const {name , age} = props ; 
    return(
        <div className="todo-data">
        <div>My name is {name} {age} </div>
        <div>Learning React</div>
        <div>Abc</div>
      </div>
    )
}
export default TodoData