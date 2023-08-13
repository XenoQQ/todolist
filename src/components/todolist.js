import './styles/todolist.css';
import Todolistitem from './todolistitem';

const Todolist = ({ todos, setDone, deleteTodo, listStatus, setShowSub, addSubTodo, updateTodo, handleInputDisplayed, handleSubInputDisplayed, lastUpdatedTodoID }) => {

    const getDoneTodos = () => {
        if (listStatus.visibleAll || listStatus.visibleDone) {
            return (todos.filter((todo) => todo.done))
        } else return [];
    };

    const getUndoneTodos = () => {
        if (listStatus.visibleAll || listStatus.visibleUndone) {
            return (todos.filter((todo) => !todo.done))
        } else return [];
    };

    return (
        <div>
            <div className={`listcontainer + ${listStatus.fadeStatus === 'fade' ? 'fade' : ''} + ${listStatus.fadeStatus === 'unfade' ? 'unfade' : ''}`}>
                <ul className='list'>
                    {getUndoneTodos()
                        .filter(todo => !todo.isSub)
                        .map
                        ((todo) =>
                            <Todolistitem
                                todo={todo}
                                setDone={setDone}
                                getDoneTodos={getDoneTodos}
                                getUndoneTodos={getUndoneTodos}
                                setShowSub={setShowSub}
                                handleInputDisplayed={handleInputDisplayed}
                                handleSubInputDisplayed={handleSubInputDisplayed}
                                addSubTodo={addSubTodo}
                                updateTodo={updateTodo}
                                deleteTodo={deleteTodo}
                                lastUpdatedTodoID={lastUpdatedTodoID}
                            />
                        )}
                </ul>
                <ul className='list'>
                    {getDoneTodos()
                        .filter(todo => !todo.isSub)
                        .map((todo) =>
                            <Todolistitem
                                todo={todo}
                                setDone={setDone}
                                getDoneTodos={getDoneTodos}
                                getUndoneTodos={getUndoneTodos}
                                setShowSub={setShowSub}
                                handleInputDisplayed={handleInputDisplayed}
                                handleSubInputDisplayed={handleSubInputDisplayed}
                                addSubTodo={addSubTodo}
                                updateTodo={updateTodo}
                                deleteTodo={deleteTodo}
                                lastUpdatedTodoID={lastUpdatedTodoID}
                            />
                        )}
                </ul>
            </div>
        </div>
    )
}

export default Todolist;