import imgCheckedGrey from '../assets/icon-checked-grey.png';
import Sublist from './sublist';
import Dropdownmenu from './dropdown';
import Updateinput from './updateinput';
import { v4 as uuidv4 } from 'uuid';
import './styles/todolistitem.css';

const Todolistitem = ({ todo, setDone, deleteTodo, setShowSub, addSubTodo, updateTodo, handleInputDisplayed, handleSubInputDisplayed, getDoneTodos, getUndoneTodos, lastUpdatedTodoID }) => {
  
    return (
        <div className={`list__itemcontainer + ${todo.id === lastUpdatedTodoID ? 'unfade' : ''} + ${todo.deleteStatus === 'onDelete' ? 'fade' : ''}`} key={uuidv4()}>
            <div className='list__line'>
                <label className='list__custom-checkbox'>
                    <input
                        type="checkbox"
                        onChange={() => { setDone(todo.id) }}
                        checked={todo.done}
                    />
                    <span className='list__checkmark'>
                        <img src={imgCheckedGrey} className='list__checkmark_mark' alt='Done todo' />
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
                        lastUpdatedTodoID={lastUpdatedTodoID}
                    />}
            </div>
        </div>
    )
}

export default Todolistitem;