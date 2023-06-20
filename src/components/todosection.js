import './styles/todosection.css';

const Todosection = ({list, remove}) => {
    return (
        <>
        {list?.length > 0 ? (
        <ul className='todoList'>
            {list.map((todo, index) => (
                <div className='todoElement'>
                    <li key={index}> {todo} </li>
                    <button className='deleteButton'>D</button>
                </div>
            ))}

        </ul>
        ) : (
            <div className='empty'>
                <p>No todos today, lmao</p>
            </div>
        )}

        </>
    )

};

export default Todosection;