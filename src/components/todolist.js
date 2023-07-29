import './styles/todolist.css';
import { v4 as uuidv4 } from 'uuid';
import Sublist from './sublist';
import Dropdownmenu from './dropdown';
import { useEffect, useRef } from 'react';

const Todolist = ({ todos, setDone, deleteTodo, listStatus, setShowSub, addSubTodo }) => {

    const getDoneTodos = () => {
        if (listStatus.visibleAll || listStatus.visibleDone) {
            return (todos.filter((todo) => todo.done))
        } else return [];
    }

    const getUndoneTodos = () => {
        if (listStatus.visibleAll || listStatus.visibleUndone) {
            return (todos.filter((todo) => !todo.done))
        } else return [];
    }

   /* const divRef = useRef(null);

    useEffect(() => {
        if (divRef.current) {
            const divElement = divRef.current;
            Unfade(divElement);
        }
    }, []);*/

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
        <div>
            <div className='listContainer'>
                <ul className='list'>
                    {getUndoneTodos()
                        .filter(todo => !todo.isSub)
                        .map
                        ((todo) =>
                            <div className='list__itemcontainer' key={uuidv4()}> 
                                <div className='list__line'  >
                                    <input className='list__checkbox' type="checkbox" onChange={() => { setDone(todo.id) }} />
                                    <li className='list__text'>
                                        {todo.text}
                                    </li>
                                    <div className='list__dropdownmenucontainer'>
                                        <Dropdownmenu
                                            setShowSub={setShowSub}
                                            deleteTodo={deleteTodo}
                                            id={todo.id} />
                                    </div>
                                </div>
                                <div className='list__sublistcontainer'>
                                    {todo.showSub &&
                                        <Sublist
                                            addSubTodo={addSubTodo}
                                            todoID={todo.id}
                                            getDoneTodos={getDoneTodos}
                                            getUndoneTodos={getUndoneTodos}
                                            deleteTodo={deleteTodo}
                                            setDone={setDone}
                                            setShowSub={setShowSub}
                                        />}
                                </div>
                            </div>
                        )}
                </ul>
                <ul className='list'>
                    {getDoneTodos()
                        .filter(todo => !todo.isSub)
                        .map((todo) =>
                            <div className='list__itemcontainer' key={uuidv4()} ref={divRef}>
                                <div className='list__line'  >
                                    <input className='list__checkbox list__checkbox_done' type="checkbox" onChange={() => { setDone(todo.id) }} checked />
                                    <li className='list__text list__text_done'>
                                        {todo.text}
                                    </li>
                                    <div className='list__dropdownmenucontainer'>
                                        <Dropdownmenu
                                            setShowSub={setShowSub}
                                            deleteTodo={deleteTodo}
                                            id={todo.id} />
                                    </div>
                                </div>
                                <div className='list__sublistcontainer'>
                                    {todo.showSub &&
                                        <Sublist
                                            addSubTodo={addSubTodo}
                                            todoID={todo.id}
                                            getDoneTodos={getDoneTodos}
                                            getUndoneTodos={getUndoneTodos}
                                            deleteTodo={deleteTodo}
                                            setDone={setDone}
                                            setShowSub={setShowSub}
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