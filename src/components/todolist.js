import './styles/todolist.css';
import { v4 as uuidv4 } from 'uuid';

const Todolist = ({ todos, setDone, deleteTodo }) => {

    const getDoneTodos = () => {
        return (todos.filter((todo) => todo.done))
    }

    const getUndoneTodos = () => {
        return (todos.filter((todo) => !todo.done))
    }

    return (

        <div>
            <h1>Undone</h1>
            <ul className='list'>
                {getUndoneTodos().map((todo, index) =>
                    <div className='list__line' key={uuidv4()} >
                        <input className='list__checkbox' type="checkbox" onChange={() => { setDone(index) }} />
                        <li className='list__text'>
                            {todo.text}
                        </li>
                        <button className='list__delete' onClick={() => { deleteTodo(index); }}>
                            Delete
                        </button>
                    </div>
                )}
            </ul>
            <h1>Done</h1>
            <ul className='list'>
                {getDoneTodos().map((todo, index) =>
                    <div className='list__line' key={uuidv4()} >
                        <input className='list__checkbox' type="checkbox" onChange={() => { setDone(index) }} checked/>
                        <li className='list__text'>
                            {todo.text}
                        </li>
                        <button className='list__delete' onClick={() => { deleteTodo(index); }}>
                            Delete
                        </button>
                    </div>
                )}
            </ul>

        </div>
    )
}

export default Todolist;