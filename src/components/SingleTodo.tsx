import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../Models';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

interface Props {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])
    //Handle Edit Task
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(todos.map(todo => todo.id === id ? { ...todo, todo: editTodo } : todo));
        setEdit(false);
    }
    //Handle Task Delete 
    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    };
    //Handle Task Done
    const handleDone = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
    }
    return (
        <form className='singleTodo' onSubmit={(e) => handleEdit(e, todo.id)}>
            {edit ? <input type="text" ref={inputRef} value={editTodo} className="todo-title" onChange={(e) => setEditTodo(e.target.value)} /> :
                (todo.isDone ? <s className="todo-title">{todo.todo}</s> :
                    <span className="todo-title">{todo.todo}</span>)

            }
            <div>
                <span className="icon" title='Edit' onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }}><AiFillEdit /></span>
                <span className="icon" title='Delete' onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
                <span className="icon" title='Complete' onClick={() => handleDone(todo.id)}><MdDone /></span>
            </div>
        </form>
    );
};

export default SingleTodo;