import './styles/sublist.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Dropdownmenu from './dropdown';

const Sublist = ({ addSubTodo, todoID, getDoneTodos, getUndoneTodos, deleteTodo, setDone }) => {
    const [currentText, setCurrentText] = useState('');

    return (
        <div className='sublistContainer'>
            <div className='subinput'>
                <input
                    className='subinput__form'
                    placeholder='Type here more todos, lmao'
                    value={currentText}
                    onChange={(e) => { setCurrentText(e.target.value) }}
                />
                <div className='sublist__dropdownmenucontainer'>
                <button className='subinput__button' onClick={() => { addSubTodo(currentText, todoID); setCurrentText('') }} />
                </div>
            </div>
            <ul className='sublist'>
                {getUndoneTodos()
                    .filter(todo => todo.isSub)
                    .filter((todo) => todo.parentID === todoID)
                    .map((todo) =>
                        <div className='sublist__line' key={uuidv4()} >
                            <input className='sublist__checkbox' type="checkbox" onChange={() => { setDone(todo.id) }} />
                            <li className='sublist__text'>
                                {todo.text}
                            </li>
                            <div className='sublist__dropdownmenucontainer'>
                                <Dropdownmenu
                                    deleteTodo={deleteTodo}
                                    id={todo.id} 
                                    isSub={true}
                                    />
                                    
                            </div>
                        </div>
                    )}
            </ul>
            <ul className='list'>
                {getDoneTodos()
                    .filter(todo => todo.isSub)
                    .filter((todo) => todo.parentID === todoID)
                    .map((todo) =>
                        <div className='sublist__line' key={uuidv4()} >
                            <input className='sublist__checkbox sublist__checkbox_done' type="checkbox" onChange={() => { setDone(todo.id) }} checked />
                            <li className='sublist__text sublist__text_done'>
                                {todo.text}
                            </li>
                            <div className='list__dropdownmenucontainer'>
                                <Dropdownmenu
                                    deleteTodo={deleteTodo}
                                    id={todo.id} />
                            </div>
                        </div>
                    )}
            </ul>
        </div>

    )
}

export default Sublist;