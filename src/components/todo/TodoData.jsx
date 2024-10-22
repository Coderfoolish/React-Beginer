const TodoData = (props) => {
  //props la` 1 bien ojects 
    const {name , age} = props ;
    console.log(">> check props" , props) 
    return(
        <div className="todo-data">
        <div>My name is {name} {age} </div>
        <div>Learning React</div>
        <div>Abc</div>
        <div>
            {JSON.stringify(props.todoList)}
        </div>
      </div>
    )
}
export default TodoData