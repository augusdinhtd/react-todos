import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodoList";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodosProvider } from "@/context/TodosContext";

const TodosLogic = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  function getInitialTodos() {
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id != id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    // Storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  return (
    <TodosProvider>
      <InputTodo 
        // addTodoItem={addTodoItem}
      />
      <TodosList
        // todoProps={todos}
        // setTodos={setTodos}
        // handleChange={handleChange}
        // delTodo={delTodo}
        // setUpdate={setUpdate}
      />
    </TodosProvider>
  );
};
export default TodosLogic;
