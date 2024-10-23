import { useState } from "react";

const TodoNew = (props) => {
  // console.log("check out ", props) ;
  const [valueInput, setValueInput] = useState("TanDao");
  const { addNewTodo } = props;
  // addNewTodo("eric")
  const handleclick = () => {
    addNewTodo(valueInput);
    setValueInput("");
  };
  const handleOnChange = (name) => {
    setValueInput(name);
  };
  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => handleOnChange(event.target.value)}
        value={valueInput}
      />
      <button style={{ cursor: "pointer" }} onClick={handleclick}>
        Add
      </button>
    </div>
  );
};
export default TodoNew;
