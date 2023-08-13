import './styles/sublist.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Dropdownmenu from './dropdown';
import Updateinput from './updateinput';
import imgStart from '../assets/icon-start.png';
import imgCheckedGrey from '../assets/icon-checked-grey.png';
import imgX from '../assets/icon-x.png';


const Sublist = ({ addSubTodo, parentID, getDoneTodos, getUndoneTodos, deleteTodo, setDone, updateTodo, handleInputDisplayed, handleSubInputDisplayed, todo, lastUpdatedTodoID }) => {

    const [currentText, setCurrentText] = useState('');



    return (
        <div className='sublistContainer'>
            <div className='subinput'
                style={{ display: todo.isSubInputDisplayed ? 'flex' : 'none' }}>
                <input
                    className='subinput__form'
                    placeholder='Type here more todos, lmao'
                    value={currentText}
                    onChange={(e) => { setCurrentText(e.target.value) }}
                    onKeyDown={(e) => { e.key === 'Enter' && addSubTodo(parentID, currentText); e.key === 'Enter' && setCurrentText('') }}
                />
                <button className='subinput__button' onClick={() => { addSubTodo(parentID, currentText); setCurrentText('') }} >
                    <img src={imgStart} width='35px' height='35px' alt='Start' />
                </button>
                <button className='subinput__button' onClick={() => { handleSubInputDisplayed(todo.id) }} >
                    <img src={imgX} width='60px' height='60px' alt='X' />
                </button>
            </div>
            <ul className='sublist'>
                {getUndoneTodos()
                    .filter(todo => todo.isSub)
                    .filter((todo) => todo.parentID === parentID)
                    .map((todo) =>
                        <div className={`sublist__line + ${todo.id === lastUpdatedTodoID ? 'unfade' : ''}`} key={uuidv4()} >
                            <label className='sublist__custom-checkbox'>
                                <input
                                    type="checkbox"
                                    onChange={() => { setDone(todo.id) }}
                                />
                                <span className='sublist__checkmark'>
                                    <img src={imgCheckedGrey} className='sublist__checkmark_mark' alt='Done todo' />
                                </span>
                            </label>
                            <li
                                className='sublist__text'
                                style={{ display: todo.isInputDisplayed ? 'none' : 'flex' }}
                            >
                                {todo.text}
                            </li>
                            <Updateinput
                                updateTodo={updateTodo}
                                todo={todo}
                                handleInputDisplayed={handleInputDisplayed}
                            />
                            <div className='sublist__dropdownmenucontainer'>
                                <Dropdownmenu
                                    deleteTodo={deleteTodo}
                                    id={todo.id}
                                    isSub={true}
                                    handleInputDisplayed={handleInputDisplayed}
                                    todo={todo}
                                />
                            </div>
                        </div>
                    )}
            </ul>
            <ul className='sublistContainer sublistContainer_done'>
                {getDoneTodos()
                    .filter(todo => todo.isSub)
                    .filter((todo) => todo.parentID === parentID)
                    .map((todo) =>
                        <div className={`sublist__line + ${todo.id === lastUpdatedTodoID ? 'unfade' : ''}`} key={uuidv4()} >
                            <label className='sublist__custom-checkbox'>
                                <input
                                    type="checkbox"
                                    onChange={() => { setDone(todo.id) }}
                                    checked
                                />
                                <span className='sublist__checkmark'>
                                    <img src={imgCheckedGrey} className='sublist__checkmark_mark' alt='Done todo' />
                                </span>
                            </label>
                            <li
                                className='sublist__text sublist__text_done'
                                style={{ display: todo.isInputDisplayed ? 'none' : 'flex' }}
                            >
                                {todo.text}
                            </li>
                            <Updateinput
                                updateTodo={updateTodo}
                                todo={todo}
                                handleInputDisplayed={handleInputDisplayed}
                            />
                            <div className='list__dropdownmenucontainer'>
                                <Dropdownmenu
                                    deleteTodo={deleteTodo}
                                    id={todo.id}
                                    isSub={true}
                                    handleInputDisplayed={handleInputDisplayed}
                                    todo={todo}
                                />

                            </div>
                        </div>
                    )}
            </ul>
        </div>

    )
}

export default Sublist;