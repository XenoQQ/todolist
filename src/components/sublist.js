import './styles/sublist.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Sublist = ({ addSubTodo, todoID, getDoneTodos, getUndoneTodos, deleteTodo, setDone }) => {
    const [currentText, setCurrentText] = useState('');

    return (
        <div className='listContainer'>
            <div className='input'>
                <input
                    className='input__form'
                    placeholder='Got any plans? Write here!'
                    value={currentText}
                    onChange={(e) => { setCurrentText(e.target.value) }}
                />
                <button className='input__button' onClick={() => { addSubTodo(currentText, todoID); setCurrentText('') }} />
            </div>

            <ul className='list'>
                {getUndoneTodos().filter(todo => todo.isSub).map((todo) =>
                    <div className='list__line' key={uuidv4()} >
                        <input className='list__checkbox' type="checkbox" onChange={() => { setDone(todo.id) }} />
                        <li className='list__text'>
                            {todo.text}
                        </li>
                        <button className='list__delete' onClick={() => { deleteTodo(todo.id); }}>
                            Delete
                        </button>
                    </div>
                )}
            </ul>
            <ul className='list'>
                {getDoneTodos().filter(todo => todo.isSub).map((todo) =>
                    <div className='list__line' key={uuidv4()} >
                        <input className='list__checkbox list__checkbox_done' type="checkbox" onChange={() => { setDone(todo.id) }} checked />
                        <li className='list__text list__text_done'>
                            {todo.text}
                        </li>
                        <button className='list__delete' onClick={() => { deleteTodo(todo.id); }}>
                            Delete
                        </button>
                    </div>
                )}
            </ul>
        </div>

    )
}

export default Sublist;