import React, { useState } from "react";
import styles from "./to-do-list.scss";

const ToDoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy Milk" },
    { id: 2, text: "Buy Cheese" },
  ]);

  function handleNewTodoChange(e) {
    e.preventDefault();
    setNewTodo(e.target.value);
    console.log(newTodo);
  }

  function handleNewTodo(e) {
    e.preventDefault();
    if (newTodo === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    setNewTodo("");
    e.target.reset();
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id != id));
  }

  return (
    <div className={styles.demoComponent}>
      <h1>Todos</h1>
      <form onSubmit={handleNewTodo}>
        <input
          placeholder="Your todo..."
          onChange={handleNewTodoChange}
        ></input>
        <ul className={styles.todoList}>
          {todos.map((todo) => (
            <li key={todo.id} className={styles.todo}>
              {todo.text}
              <a href="#" onClick={() => removeTodo(todo.id)}>
                X
              </a>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default ToDoList;
