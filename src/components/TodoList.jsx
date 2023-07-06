import TodoItem from "@/components/TodoItem";
import { useTodosContext } from "@/context/TodosContext";

const TodosList = (props) => {
  // const { todoProps, setTodos, handleChange, delTodo, setUpdate } = props;
  const { todos } = useTodosContext();

  return (
    <ul>
      {/* {todoProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          setTodos={setTodos}
          handleChange={handleChange}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      ))} */}
      {todos.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} />
      ))}
    </ul>
  );
};
export default TodosList;
