import React, { useRef } from 'react';
import './style.css';

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAddtodo: (e: React.FormEvent) => void;
};
const InputField: React.FC<Props> = ({ todo, setTodo, handleAddtodo }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form onSubmit={handleAddtodo} className='input-wrapper'>
            <input type="text" ref={inputRef} value={todo} onChange={e => setTodo(e.target.value)} className='inputFiled' placeholder='Write a Task' />
            <button className="submit-btn" type='submit'>GO</button>
        </form>
    );
};

export default InputField;