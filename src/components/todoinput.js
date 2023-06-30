import './styles/todoinput.css';
import {v4 as uuidv4} from 'uuid';

const Todoinput = ({ todo, addTodo, setTodo }) => {
    return (
        <div className='input'>
            <input
                className='input__form'
                placeholder='Got any plans? Write here!'
                value={todo.text}
                onChange={(e) => { setTodo({ id: uuidv4(), text: e.target.value, done: false }) }}
            />

            <button className='input__button' onClick={addTodo} />
        </div>
    )
}

export default Todoinput