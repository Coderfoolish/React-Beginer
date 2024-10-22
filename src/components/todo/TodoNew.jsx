

const TodoNew = (props) => {
  console.log("check out ", props) ;
  const { addNewTodo } =props ;  
  // addNewTodo("eric")
  const handleclick = () => {
    alert("click me")
  }
  const handleOnChange = (event) =>{
    console.log(`>>> handleOnChange` , event.target.value)
  }
    return( 
        <div className='todo-new'>
        <input type="text" 
        onChange={handleOnChange} 
        />
        <button style = {{cursor : "pointer"}} 
        onClick={handleclick}
        >Add</button>
      </div>
    )
}
export default TodoNew ;  