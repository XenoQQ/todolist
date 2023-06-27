import './styles/todolist.css';
import { v4 as uuidv4 } from 'uuid';

const Todolist = ({ todos, deleteTodo }) => {
    return (
        <div>
            <ul className='list'>
                {todos.map((todo, index) =>
                    <div className='list__line' key={index} >
                        <input className='list__checkbox' type="checkbox" />
                        <li className='list__text' id={uuidv4()}>
                            {todo}
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

export default Todolist;