import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useTodosContext } from '@/context/TodosContext';

const InputTodo = () => {
  // const { addTodoItem } = this.props;
  const { addTodoItem } = useTodosContext();

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle("");
      setMessage("");
    } else {
      setMessage("Please add item.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="input-text"
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
        />
        <IconContext.Provider
          value={{
            color: "darkcyan",
            style: { fontSize: "20px" },
            className: "submit-iconn",
          }}
        >
          <button className="input-submit">
            <FaPlusCircle />
          </button>
        </IconContext.Provider>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};
export default InputTodo;
