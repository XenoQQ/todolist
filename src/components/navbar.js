import './styles/navbar.css';

const Navbar = ({ setListStatus, deleteDoneTodos, todos }) => {

    const getUndoneTodos = () => {
        let undoneTodos = todos.filter((todo) => !todo.isSub).filter((todo) => !todo.done).length;
        if (undoneTodos === 0) {
            return 'No undone todos';
        } else {
            return `Show ${undoneTodos} undone todos`;
        }
    }

    const getDoneTodos = () => {
        let doneTodos = todos.filter((todo) => !todo.isSub).filter((todo) => todo.done).length;
        if (doneTodos === 0) {
            return 'No done todos';
        } else {
            return `Show ${doneTodos} done todos`;
        }
    }

    return (
        <div className='navbarContainer'>
            <button className='navbar__button' onClick={() => {
                setListStatus({
                    visibleAll: true,
                    vivibleDone: false,
                    visibleUndone: false,
                })
            }}>
                Show all
            </button>
            <button className='navbar__button' onClick={() => {
                setListStatus({
                    visibleAll: false,
                    vivibleDone: false,
                    visibleUndone: true,
                })
            }}>
                {getUndoneTodos()}
            </button>
            <button className='navbar__button' onClick={() => {
                setListStatus({
                    visibleAll: false,
                    visibleDone: true,
                    visibleUndone: false,
                })
            }}>
                {getDoneTodos()}
            </button>
            <button className='navbar__button' onClick={() => {
                deleteDoneTodos()
            }}>
                Delete all done
            </button>
        </div>
    );
}

export default Navbar;
