import './styles/todoheader.css';

const Todoheader = ({ todo, setTodo, addTodo }) => {
    return (
        <div className='todoHeader'>

            <input
                className='inputForm'
                type='text'
                value={todo}
                placeholder='Got any plans? Write here!'
                onChange={(e) => {
                    setTodo(e.target.value);
                }}
            />
            <button className='inputDone' onClick={addTodo}></button>

        </div>
    )

};

export default Todoheader;