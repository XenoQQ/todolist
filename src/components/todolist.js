import './styles/todolist.css';
import { v4 as uuidv4 } from 'uuid';
import Sublist from './sublist';
import Dropdownmenu from './dropdown';
import Updateinput from './updateinput';
import { useEffect, useRef, useState } from 'react';
import imgCheckedGrey from '../assets/icon-checked-grey.png';

const Todolist = ({ todos, setDone, deleteTodo, listStatus, setShowSub, addSubTodo, updateTodo, handleInputDisplayed, handleSubInputDisplayed }) => {

    const getDoneTodos = () => {
        if (listStatus.visibleAll || listStatus.visibleDone) {
            return (todos.filter((todo) => todo.done))
        } else return [];
    };

    const getUndoneTodos = () => {
        if (listStatus.visibleAll || listStatus.visibleUndone) {
            return (todos.filter((todo) => !todo.done))
        } else return [];
    };



    /*const divRef = useRef(null);

    useEffect(() => {
        const divElement = divRef.current;
        Unfade(divElement);
    })
  */

    const Unfade = (element) => {
        var op = 0.1;
        element.style.display = 'flex';
        var timer = setInterval(function () {
            if (op >= 1) {
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 20);
    }

    /* const Fade = (element) => {
        var op = 1;
        var timer = setInterval(function () {
            if (op <= 0.1) {
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 20);
    }
 
    */

    return (
        <div>``
            <div className='listContainer'>
                <ul className='list'>
                    {getUndoneTodos()
                        .filter(todo => !todo.isSub)
                        .map
                        ((todo) =>
                            <div className='list__itemcontainer' key={uuidv4()}>
                                <div className='list__line'  >
                                    <label className='list__custom-checkbox'>
                                        <input
                                            type="checkbox"
                                            onChange={() => { setDone(todo.id) }}

                                        />
                                        <span className='list__checkmark'>
                                            <img src={imgCheckedGrey} className='list__checkmark_mark' alt='Done todo'/>
                                        </span>
                                    </label>
                                    <li
                                        className='list__text'
                                        style={{
                                            display: todo.isInputDisplayed ? 'none' : 'flex'
                                        }}
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
                                            setShowSub={setShowSub}
                                            deleteTodo={deleteTodo}
                                            id={todo.id}
                                            handleInputDisplayed={handleInputDisplayed}
                                            handleSubInputDisplayed={handleSubInputDisplayed}
                                            updateTodo={updateTodo}
                                            todo={todo}
                                        />
                                    </div>
                                </div>
                                <div className='list__sublistcontainer'>
                                    {todo.showSub &&
                                        <Sublist
                                            addSubTodo={addSubTodo}
                                            parentID={todo.id}
                                            getDoneTodos={getDoneTodos}
                                            getUndoneTodos={getUndoneTodos}
                                            deleteTodo={deleteTodo}
                                            setDone={setDone}
                                            updateTodo={updateTodo}
                                            handleInputDisplayed={handleInputDisplayed}
                                            handleSubInputDisplayed={handleSubInputDisplayed}
                                            todo={todo}
                                        />}
                                </div>
                            </div>
                        )}
                </ul>
                <ul className='list'>
                    {getDoneTodos()
                        .filter(todo => !todo.isSub)
                        .map((todo) =>
                            <div className='list__itemcontainer' key={uuidv4()}>
                                <div className='list__line'  >
                                    <label className='list__custom-checkbox'>
                                        <input
                                            type="checkbox"
                                            onChange={() => { setDone(todo.id) }}
                                            checked

                                        />
                                        <span className='list__checkmark'>
                                            <img src={imgCheckedGrey} className='list__checkmark_mark' alt='Done todo'/>
                                        </span>
                                    </label>
                                    <li
                                        className='list__text list__text_done'
                                        style={{
                                            display: todo.isInputDisplayed ? 'none' : 'flex'
                                        }}
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
                                            setShowSub={setShowSub}
                                            deleteTodo={deleteTodo}
                                            id={todo.id}
                                            handleInputDisplayed={handleInputDisplayed}
                                            handleSubInputDisplayed={handleSubInputDisplayed}
                                            updateTodo={updateTodo}
                                            todo={todo}
                                        />
                                    </div>
                                </div>
                                <div className='list__sublistcontainer'>
                                    {todo.showSub &&
                                        <Sublist
                                            addSubTodo={addSubTodo}
                                            parentID={todo.id}
                                            getDoneTodos={getDoneTodos}
                                            getUndoneTodos={getUndoneTodos}
                                            deleteTodo={deleteTodo}
                                            setDone={setDone}
                                            updateTodo={updateTodo}
                                            handleInputDisplayed={handleInputDisplayed}
                                            handleSubInputDisplayed={handleSubInputDisplayed}
                                            todo={todo}
                                        />}

                                </div>
                            </div>
                        )}
                </ul>
            </div>
        </div>
    )
}

export default Todolist;