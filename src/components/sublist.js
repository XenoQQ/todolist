import './styles/sublist.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Dropdownmenu from './dropdown';


const Sublist = ({ addSubTodo, parentID, getDoneTodos, getUndoneTodos, deleteTodo, setDone, updateTodo, handleInputDisplayed }) => {
    const [currentText, setCurrentText] = useState('');

    return (
        <div className='sublistContainer'>
            <div className='subinput'>
                <input
                    className='subinput__form'
                    placeholder='Type here more todos, lmao'
                    value={currentText}
                    onChange={(e) => { setCurrentText(e.target.value) }}
                    onKeyDown={(e) => { e.key === 'Enter' && addSubTodo(parentID, currentText); e.key === 'Enter' && setCurrentText('') }}
                />
                <div className='sublist__dropdownmenucontainer'>
                    <button className='subinput__button' onClick={() => { addSubTodo(parentID, currentText); setCurrentText('') }} />
                </div>
            </div>
            <ul className='sublist'>
                {getUndoneTodos()
                    .filter(todo => todo.isSub)
                    .filter((todo) => todo.parentID === parentID)
                    .map((todo) =>
                        <div className='sublist__line' key={uuidv4()} >
                            <input className='sublist__checkbox' type="checkbox" onChange={() => { setDone(todo.id) }} />
                            <li className='sublist__text' style={{ display: todo.isInputDisplayed ? 'none' : 'flex' }}>
                                {todo.text}
                            </li>
                            <input
                                className='sublist__editor' style={{ display: todo.isInputDisplayed ? 'flex' : 'none' }}
                                placeholder={todo.text}
                                defaultValue={todo.text}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        updateTodo(todo.id, e.target.value);
                                    }
                                }}
                            />
                            <div className='sublist__dropdownmenucontainer'>
                                <Dropdownmenu
                                    deleteTodo={deleteTodo}
                                    id={todo.id}
                                    isSub={true}
                                    handleInputDisplayed={handleInputDisplayed}
                                />

                            </div>
                        </div>
                    )}
            </ul>
            <ul className='list'>
                {getDoneTodos()
                    .filter(todo => todo.isSub)
                    .filter((todo) => todo.parentID === parentID)
                    .map((todo) =>
                        <div className='sublist__line' key={uuidv4()} >
                            <input className='sublist__checkbox sublist__checkbox_done' type="checkbox" onChange={() => { setDone(todo.id) }} checked />
                            <li className='sublist__text sublist__text_done' style={{ display: todo.isInputDisplayed ? 'none' : 'flex' }}>
                                {todo.text}
                            </li>
                            <input
                                className='sublist__editor' style={{ display: todo.isInputDisplayed ? 'flex' : 'none' }}
                                placeholder={todo.text}
                                defaultValue={todo.text}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        updateTodo(todo.id, e.target.value);
                                    }
                                }}
                            />
                            <div className='list__dropdownmenucontainer'>
                                <Dropdownmenu
                                    deleteTodo={deleteTodo}
                                    id={todo.id}
                                    isSub={true} 
                                    handleInputDisplayed={handleInputDisplayed}
                                    />

                            </div>
                        </div>
                    )}
            </ul>
        </div>

    )
}

export default Sublist;