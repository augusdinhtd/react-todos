import styles from "@/styles/TodoItem.module.scss";
import { useState, useRef } from "react";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useTodosContext } from "@/context/TodosContext";
import { useAuthContext } from "@/context/AuthContext";

const TodoItem = ({ itemProp }) => {
  // const { itemProp, setTodos, handleChange, delTodo, setUpdate } = this.props;
  const [editing, setEditing] = useState(false);
  // const [updateInput, setUpdateInput] = useState(itemProp.title);
  const editInputRef = useRef(null);
  const { user } = useAuthContext();

  const { handleChange, delTodo, setUpdate } = useTodosContext();

  const handleEditing = () => {
    setEditing(true);
  };

  // const handleChange = (id) => {
  // setTodos((prevState) =>
  //   prevState.map((todo) => {
  //     if (todo.id === id) {
  //       return {
  //         ...todo,
  //         completed: !todo.completed,
  //       };
  //     }

  //     return todo;
  //   })
  // );
  // };

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          // onChange={() => handleChange(itemProp.id)}
          onChange={() => handleChange(itemProp.id)}
        />
        {user && (
          <button onClick={handleEditing}>
            <AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }} />
          </button>
        )}
        <button onClick={() => delTodo(itemProp.id)}>
          <FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }} />
        </button>
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input
        ref={editInputRef}
        defaultValue={itemProp.title}
        type="text"
        // value={updateInput}
        className={styles.textInput}
        style={editMode}
        // onChange={(e) => setUpdateInput(e.target.value)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
export default TodoItem;
