import './styles/todolist.css';

const Todolist = ({ todos, deleteTodo }) => {
    return (
        <div>
            <ul>
                {todos.map((todo, index) =>
                    <div>
                        <li key={index}>
                            {todo}
                        </li>
                        <button onClick={() => { deleteTodo(todo); }}>
                            Delete
                        </button>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default Todolist;