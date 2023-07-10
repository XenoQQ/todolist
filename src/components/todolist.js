import './styles/todolist.css';
import { v4 as uuidv4 } from 'uuid';

const Todolist = ({ todos, setDone, deleteTodo, listStatus }) => {

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

    return (

        <div>
            <div className='listContainer'>
                <ul className='list'>
                    {getUndoneTodos().map((todo) =>
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
                    {getDoneTodos().map((todo) =>
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
        </div>
    )
}

export default Todolist;