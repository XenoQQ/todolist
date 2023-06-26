import './styles/todoinput.css';

const Todoinput = ({ todo, addTodo, setTodo }) => {
    return (
        <div className='input'>
            <input
                className='input__form'
                placeholder='Got any plans? Write here!'
                value={todo}
                onChange={(e) => { setTodo(e.target.value) }}
            />

            <button className='input__button' onClick={addTodo} />
        </div>
    )
}

export default Todoinput