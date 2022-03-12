import React, { useState } from 'react';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './Models';
import './App.css';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  //handle Submit
  const handleAddtodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, {
        id: Date.now(),
        todo: todo,
        isDone: false,
      }]);
      setTodo("")
    }
  };
  console.log(todos);
  return (
    <div className="App">
      <h2 className="heading">Add Task</h2>
      <InputField todo={todo} setTodo={setTodo} handleAddtodo={handleAddtodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
