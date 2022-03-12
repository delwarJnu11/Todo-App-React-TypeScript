import React from 'react';
import { Todo } from '../Models';
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className='todoListContainer'>
            {
                todos.map(todo => <SingleTodo todos={todos} setTodos={setTodos} todo={todo} key={todo.id} />)
            }
        </div>
    );
};

export default TodoList;