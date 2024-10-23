const TodoData = (props) => {

  const { todoList , deleteTodo } = props;
  // console.log(">> check props", todoList);
  const handleclick = (id) => {
    deleteTodo(id)
  }
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        console.log(">> check map : ", item, index);
        return (
          <div className={`todo-item`} key= {item.id}>
            <div>{item.name}</div>
            <button 
            onClick={() => handleclick(item.id)}
            style={{ cursor: "pointer" }}>delete</button>
          </div>
        );
      })}
      {/* <div>{JSON.stringify(props.todoList)}</div> */}
    </div>
  );
};
export default TodoData;
